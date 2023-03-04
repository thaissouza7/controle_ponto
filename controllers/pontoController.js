const pontoService = require('../services/pontoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };
        let pontos = await pontoService.buscarTodos();
        for (let i in pontos) {
            json.result.push({
                id: pontos[i].id,
                funcionario: pontos[i].funcionario,
                dia: pontos[i].dia,
                entrada: pontos[i].entrada,
                saida: pontos[i].saida
            });
        }
        res.json(json);
    },
    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };
        let funcionario = req.params.funcionario
        let ponto = await pontoService.buscarUm(funcionario);
        if (ponto) {
            json.result = ponto
        }
        res.json(json);
    // },
    // inserir: async (req, res) => {
    //     console.log("entrou no inserir")

    //     let json = { error: '', result:{}};
        
    //     let funcionario = req.body.funcionario
    //     let dia = req.body.dia
    //     let entrada = req.body.entrada
    //     let saida = req.body.saida
        
    //     if (funcionario && dia && entrada && saida) {
    //         let pontoId = await pontoService.inserir(funcionario, dia, entrada, saida);

    //         json.result = {
    //             id: pontoId,
    //             funcionario,
    //             dia,
    //             entrada,
    //             saida
    //         };
            
    //     } else {
    //         json.error = ' Campos não enviados '
    //     }
    //     res.json(json);
    }
};






