var empresaModel = require("../models/empresaModel");

var sessoes = [];

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        empresaModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarEmpresa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nomeSocial = req.body.nomeSocialServer;
    var nomeFantasia = req.body.nomeFantasiaServer;
    var cnpj = req.body.cnpjServer;
    var representante = req.body.representanteServer;
    var telefone = req.body. telefoneServer;
    var cep = req.body.cepServer;
    var sigla = req.body.ufServer;
    var nomeVinicola = req.body.nomeVinicolaServer;
    var cidade = req.body.empresaCidadeServer;
    var bairro = req.body.bairroServer;
    var complemento = req.body.complementoServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;

    // Faça as validações dos valores
    if (nomeSocial == undefined) {
        res.status(400).send("Seu nomeSocial está undefined!");
    } else if (nomeFantasia == undefined) {
        res.status(400).send("Sua nomeFantasia está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Sua cnpj está undefined!");
    } else if (representante == undefined) {
        res.status(400).send("Sua representante está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Sua telefone está undefined!");
    }  else if (cep == undefined) {
        res.status(400).send("Sua cep está undefined!");
    } else if (uf == undefined) {
        res.status(400).send("Sua uf está undefined!");
    } else if (nomeVinicola == undefined) {
        res.status(400).send("Sua nomeVinicola está undefined!");
    }else if (bairro == undefined) {
        res.status(400).send("Sua bairro está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Sua rua está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Sua numero está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Sua email está undefined!");
    } else  {
         
        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        
        empresaModel.cadastrarEmpresa(email,senha,telefone,nomeSocial,cnpj,nomeFantasia,representante,sigla,cidade,rua,bairro,numero,cep,complemento,nomeVinicola)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    entrar,
    cadastrarEmpresa
}