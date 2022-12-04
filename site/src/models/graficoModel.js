var database = require("../database/config");

function buscarUltimasMedidas(fkSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 7
        temperatura as temperatura, 
        umidade as umidade,  
                        dataTime,
                        FORMAT(dataTime, 'HH:mm:ss') as dataTime_grafico
                    from Dados_sensor
                    where fkSensor = ${fkSensor}
                    order by idDados_sensor desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
                        dataTime,
                        DATE_FORMAT(dataTime,'%H:%i:%s') as dataTime_grafico
                    from Dados_sensor
                    where fkSensor = ${fkSensor}
                    order by idDados_sensor desc limit 7`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        temperatura as temperatura, 
        umidade as umidade,  
                        dataTime,
                        FORMAT(dataTime, 'HH:mm:ss') as dataTime_grafico
                    from Dados_sensor
                    where fkSensor = ${fkSensor}
                    order by idDados_sensor desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
                        DATE_FORMAT(dataTime,'%H:%i:%s') as dataTime_grafico, 
                        fkSensor 
                        from Dados_sensor where fkSensor = ${fkSensor} 
                    order by idDados_sensor desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosGraficoMaxMin(fkSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select max(temperatura) as max, min(temperatura) as min from Dados_sensor where fkSensor = ${fkSensor};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select max(temperatura) as max, min(temperatura) as min from Dados_sensor where fkSensor = ${fkSensor};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealMaxMin(fkSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select max(temperatura) as max, min(temperatura) as min from Dados_sensor where fkSensor = ${fkSensor};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select max(temperatura) as max, min(temperatura) as min from Dados_sensor where fkSensor = ${fkSensor};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosGraficovinhoPorArmazem(fkSensor){
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select max(temperatura) as max, min(temperatura) as min from Dados_sensor where fkSensor = ${fkSensor};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select max(temperatura) as max, min(temperatura) as min from Dados_sensor where fkSensor = ${fkSensor};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosGraficoAlerta(fkSensor){

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 100
                    temperatura as temperatura, 
                    umidade as umidade,  
                    dataTime as dataTime
                    from Dados_sensor
                    where fkSensor = ${fkSensor}
                    order by idDados_sensor desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
        dataTime as dataTime
                        fkSensor 
                        from Dados_sensor where fkSensor = ${fkSensor} 
                    order by idDados_sensor desc limit 100`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAlertasEmTempoReal(fkSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        temperatura as temperatura, 
        umidade as umidade,
        dataTime as dataTime
                    from Dados_sensor
                    where fkSensor = ${fkSensor}
                    order by idDados_sensor desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
        dataTime as dataTime
                        fkSensor 
                        from Dados_sensor where fkSensor = ${fkSensor} 
                    order by idDados_sensor desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoRealMaxMin,
    buscarAlertasEmTempoReal,
    obterDadosGraficoMaxMin,
    obterDadosGraficovinhoPorArmazem,
    obterDadosGraficoAlerta
}
