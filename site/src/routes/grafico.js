var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/ultimas/:fkSensor", function (req, res) {
    graficoController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:fkSensor", function (req, res) {
    graficoController.buscarMedidasEmTempoReal(req, res);
})

router.get("/maxMin/:fkSensor", function (req, res) {
    graficoController.obterDadosGraficoMaxMin(req, res);
});

router.get("/tempo-realMaxMin/:fkSensor", function (req, res) {
    graficoController.buscarMedidasEmTempoRealMaxMin(req, res);
})

router.get("/alerta/:fkSensor", function (req, res) {
    graficoController.obterDadosGraficoAlerta(req, res);
});
router.get("/alertaDash/:fkSensor", function (req, res) {
    graficoController.obterDadosGraficoAlertaDash(req, res);
});

router.get("/tempo-realAlerta/:fkSensor", function (req, res) {
    graficoController.buscarAlertasEmTempoReal(req, res);
});

module.exports = router;