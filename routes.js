const validadores = require('./controller/validadores.controller');
const imc = require('./controller/imc.controller');

module.exports = function(app) {
    app.post("/cpf",  validadores.cpf_validador)

    app.post("/imc", imc.calc_imc)
}