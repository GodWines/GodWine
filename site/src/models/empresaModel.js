var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar (email, senha) {

    var instrucao = `
    INSERT INTO empresa(email, senha, data_cadastro) VALUES 
    ('${email}', AES_ENCRYPT('${senha}', 'sptech'), now());`
    return database.executar(instrucao)
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa (email,nomeSocial,nomeFantasia,cnpj,representante,telefone,senha,cep,uf,cidade,bairro,complemento,rua,numero) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email,nomeSocial,nomeFantasia,cnpj,representante,telefone,senha,cep,uf,cidade,bairro,complemento,rua,numero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    var instrucao1 = `
        INSERT INTO empresa  (email, senha, telefone, nome, cnpj, data_cadastro, nome_fantasia, representante) VALUES ('${email}','${senha}','${telefone}','${nomeSocial}', '${cnpj}',now(),'${nomeFantasia}', '${representante}');
    `;


    console.log("Executando a instrução SQL: \n" + instrucao1);
    return database.executar(instrucao1);
    
}


module.exports = {
    entrar,
    cadastrar,
    cadastrarEmpresa,
    listar,
};