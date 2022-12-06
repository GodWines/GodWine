// não altere!
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');
const sql = require('mssql');

// não altere!
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// configure a linha abaixo caso queira que os dados capturados sejam inseridos no banco de dados.
// false -> nao insere
// true -> insere
const HABILITAR_OPERACAO_INSERIR = true;

// altere o valor da variável AMBIENTE para o valor desejado:
// API conectada ao banco de dados remoto, SQL Server -> 'producao'
// API conectada ao banco de dados local, MySQL Workbench - 'desenvolvimento'
const AMBIENTE = 'producao';

const serial = async (
    tempVinhoGelado,
    tempVinhoFrio,
    tempVinhoAdega,
    tempVinhoFresco,
    umiArmazem

    
) => {
    let poolBancoDados = ''

    if (AMBIENTE == 'desenvolvimento') {
        poolBancoDados = mysql.createPool(
            {
                // altere!
                // CREDENCIAIS DO BANCO LOCAL - MYSQL WORKBENCH
                host: 'localhost',
                database: 'GodWine',
                user: 'aluno',
                password: 'sptech'
            }
        ).promise();
    } else if (AMBIENTE == 'producao') {
        console.log('Projeto rodando inserindo dados em nuvem. Configure as credenciais abaixo.');
    } else {
        throw new Error('Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.');
    }


    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        //console.log(data);
        const valores = data.split(';');
        const vinhoGelado = parseFloat(valores[0]);
        const vinhoFrio = parseFloat(valores[1]);
        const vinhoAdega = parseFloat(valores[2]);
        const vinhoFresco = parseFloat(valores[3]);
        const umidade = parseFloat(valores[4]);

        console.log(umiArmazem)
        tempVinhoGelado.push(vinhoGelado);
        tempVinhoFrio.push(vinhoFrio);
        tempVinhoAdega.push(vinhoAdega);
        tempVinhoFresco.push(vinhoFresco);
        umiArmazem.push(umidade);

        if (HABILITAR_OPERACAO_INSERIR) {
            if (AMBIENTE == 'producao') {
                // altere!
                // Este insert irá inserir os dados na tabela "medida"
                // -> altere nome da tabela e colunas se necessário
                // Este insert irá inserir dados de fk_aquario id=1 (fixo no comando do insert abaixo)
                // >> Importante! você deve ter o aquario de id 1 cadastrado.
                `exec inserirTemp '${vinhoGelado}','${vinhoFrio}','${vinhoAdega}','${vinhoFresco}','${umidade}';`
           
                // CREDENCIAIS DO BANCO REMOTO - SQL SERVER
                // Importante! você deve ter criado o usuário abaixo com os comandos presentes no arquivo
                // "script-criacao-usuario-sqlserver.sql", presente neste diretório.
                const connStr = "Server=bd-godwine.database.windows.net;Database=godwine;User Id=godwine-root;Password=#Gfgrupo7;";

                function inserirComando(conn, sqlquery) {
                    conn.query(sqlquery);
                }

                sql.connect(connStr)
                    .then(conn => inserirComando(conn, sqlquery))
                    .catch(err => console.log("erro! " + err));

            } else if (AMBIENTE == 'desenvolvimento') {

                // altere!
                // Este insert irá inserir os dados na tabela "Dados_sensor"
                // -> altere nome da tabela e colunas se necessário
                // Este insert irá inserir dados de fk_aquario id=1 (fixo no comando do insert abaixo)
                // >> você deve ter o aquario de id 1 cadastrado.
                await poolBancoDados.execute(
                    'INSERT INTO Dados_sensor (temperatura, umidade, fkSensor) VALUES (?, ?, 1)',
                    [vinhoGelado,umidade]
                    
                );
                await poolBancoDados.execute(
                    'INSERT INTO Dados_sensor (temperatura, umidade, fkSensor) VALUES (?, ?,2)',
                    [vinhoFrio,umidade]
                    
                );
                await poolBancoDados.execute(
                    'INSERT INTO Dados_sensor (temperatura, umidade, fkSensor) VALUES (?, ?,3)',
                    [vinhoAdega,umidade]
                    
                );
                await poolBancoDados.execute(
                    'INSERT INTO Dados_sensor (temperatura, umidade, fkSensor) VALUES (?, ?,4)',
                    [vinhoFresco,umidade]
                    
                );
                console.log("valores inseridos no banco: ", vinhoGelado + ", " + vinhoFresco)

            } else {
                throw new Error('Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.');
            }
        }
    });
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}


// não altere!
const servidor = (
    tempVinhoGelado,
    tempVinhoFrio,
    tempVinhoAdega,
    tempVinhoFresco,
    umiArmazem
   
) => {
    const app = express();
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/sensores/dht11/tempVinhoGelado', (_, response) => {
        return response.json(tempVinhoGelado);
    });
    app.get('/sensores/dht11/tempVinhoFrio', (_, response) => {
        return response.json(tempVinhoFrio);
    });
    app.get('/sensores/dht11/tempVinhoAdega', (_, response) => {
        return response.json(tempVinhoAdega);
    });
    app.get('/sensores/dht11/tempVinhoFresco', (_, response) => {
        return response.json(tempVinhoFresco);
    });
    app.get('/sensores/dht11/umiArmazem', (_, response) => {
        return response.json(umiArmazem);
    });
}

(async () => {
    const tempVinhoGelado = [];
    const tempVinhoFrio = [];
    const tempVinhoAdega = [];
    const tempVinhoFresco = [];
    const umiArmazem = [];


    await serial(
        tempVinhoGelado,
        tempVinhoFrio,
        tempVinhoAdega,
        tempVinhoFresco,
        umiArmazem
     
    );
    servidor(
        tempVinhoGelado,
        tempVinhoFrio,
        tempVinhoAdega,
        tempVinhoFresco,
        umiArmazem
        
    );
})();
