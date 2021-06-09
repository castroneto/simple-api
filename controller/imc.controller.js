
function imc(massa, altura) {
    return massa / Math.pow(altura, 2)
}


exports.calc_imc = function(request, response) {
    var valor = imc(request.body.massa, request.body.altura);

    response.send({ imc: valor })
}