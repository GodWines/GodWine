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

    emailUsuario = email;
    senhaUsuario = senha;
    var instrucao = `
        INSERT INTO empresa  (nome, cnpj, data_cadastro, nome_fantasia, representante) VALUES ('${nomeSocial}', '${cnpj}', now(), '${nomeFantasia}', '${representante}');
    `;
    database.executar(instrucao)
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa (email,nomeSocial,nomeFantasia,cnpj,representante,telefone,senha,cep,uf,cidade,bairro,complemento,rua,numero) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email,nomeSocial,nomeFantasia,cnpj,representante,telefone,senha,cep,uf,cidade,bairro,complemento,rua,numero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    var instrucao1 = `
        INSERT INTO empresa  (nome, cnpj, data_cadastro, nome_fantasia, representante) VALUES ('${nomeSocial}', '${cnpj}', now(), '${nomeFantasia}', '${representante}');
    `;

    var instrucao2 = `
        INSERT INTO usuario  (nome, email, senha, telefone) VALUES ('${representante}','${email}', '${senha}','${telefone}');
    `;
   
    var instrucao3 = `
        INSERT INTO endereco  (sigla, cidade, logradouro, bairro, numero, cep, complemento) VALUES ('${uf}', '${cidade}', '${rua}', '${bairro}', '${numero}', '${cep}', '${complemento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1);
    console.log("Executando a instrução SQL: \n" + instrucao2);
    console.log("Executando a instrução SQL: \n" + instrucao3 + usuario.email  + usuario.senha);
    return database.executar(instrucao1), database.executar(instrucao2), database.executar(instrucao3);
    
}


module.exports = {
    entrar,
    cadastrar,
    cadastrarEmpresa,
    listar,
};