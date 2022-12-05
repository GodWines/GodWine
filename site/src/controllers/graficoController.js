var graficoModel = require("../models/graficoModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var fkSensor = req.params.fkSensor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    graficoModel.buscarUltimasMedidas(fkSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var fkSensor = req.params.fkSensor;
    const limite_linhas = 7;
    console.log(`Recuperando medidas em tempo real`);

    graficoModel.buscarMedidasEmTempoReal(fkSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterDadosGraficoMaxMin(req, res) {

    const limite_linhas = 1;

    var fkSensor = req.params.fkSensor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    graficoModel.obterDadosGraficoMaxMin(fkSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealMaxMin(req, res) {

    var fkSensor = req.params.fkSensor;

    console.log(`Recuperando medidas em tempo real`);

    graficoModel.buscarMedidasEmTempoRealMaxMin(fkSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterDadosGraficovinhoPorArmazem(req, res) {

    var fkSensor = req.params.fkSensor;

    graficoModel.obterDadosGraficovinhoPorArmazem(fkSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterDadosGraficoAlerta(req,res){
    
    var fkSensor = req.params.fkSensor;

    graficoModel.obterDadosGraficoAlerta(fkSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function obterDadosGraficoAlertaDash(req,res){
    
    var fkSensor = req.params.fkSensor;

    graficoModel.obterDadosGraficoAlertaDash(fkSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAlertasEmTempoReal(req, res) {

    var fkSensor = req.params.fkSensor;

    console.log(`Recuperando medidas em tempo real`);

    graficoModel.buscarAlertasEmTempoReal(fkSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoRealMaxMin,
    buscarAlertasEmTempoReal,
    obterDadosGraficoMaxMin,
    obterDadosGraficovinhoPorArmazem,
    obterDadosGraficoAlerta,
    obterDadosGraficoAlertaDash

}