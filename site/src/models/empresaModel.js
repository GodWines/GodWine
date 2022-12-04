var database = require("../database/config")

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT empresa.*, vinicola.nome as nomeVinicola FROM empresa as empresa join vinicola as vinicola on vinicola.fkEmpresa = empresa.idEmpresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa(email,senha,telefone,nomeSocial,cnpj,nomeFantasia,representante,sigla,cidade,rua,bairro,numero,cep,complemento,nomeVinicola){
    var instrucao = `
    call inserirEmpresa('${email}', '${senha}', '${telefone}', '${nomeSocial}', '${cnpj}', '${nomeFantasia}', '${representante}','${uf}','${cidade}','${rua}','${bairro}','${numero}','${cep}','${complemento}','${nomeVinicola}');
    `;

    console.log("Cadastrando a vinicola \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrarEmpresa,
};
