var database = require("../database/config")

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa (email,senha,telefone,nomeSocial,cnpj,nomeFantasia,representante,uf,cidade,rua,bairro,numero,cep,complemento) {
    
    cadastrarEndereco(uf,cidade,rua,bairro,numero,cep,complemento)
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email,senha,telefone,nomeSocial,cnpj,nomeFantasia,representante,uf,cidade,rua,bairro,numero,cep,complemento);
    
    var instrucao = `
        INSERT INTO empresa (email, senha, telefone, nome, cnpj, data_cadastro, nome_fantasia, representante) VALUES ('${email}', '${senha}', '${telefone}', '${nomeSocial}', '${cnpj}', CURRENT_TIMESTAMP(), '${nomeFantasia}', '${representante}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarEndereco(uf,cidade,rua,bairro,numero,cep,complemento){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", uf,cidade,rua,bairro,numero,cep,complemento);

    var instrucao = `insert into endereco(sigla, cidade, logradouro, bairro, numero, cep, complemento) values('${uf}','${cidade}','${rua}','${bairro}','${numero}','${cep}','${complemento}')`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrarEmpresa,
    cadastrarEndereco
};
