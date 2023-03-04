const pontoService = require('../services/pontoService');

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: '', result: [] };
    let ponto = await pontoService.buscarTodos();
    for (let i in ponto) {
      json.result.push({
        id: ponto[i].id,
        funcionario: ponto[i].funcionario,
        dia: ponto[i].dia,
        entrada: ponto[i].entrada,
        saida: ponto[i].saida
      });
    }
    res.json(json);
  }
};






