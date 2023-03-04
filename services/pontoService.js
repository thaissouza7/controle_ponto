const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM controleponto.ponto', (error, results) => {
                if (error) { rejeitado(error); return }
                aceito(results)
            })
        })
    }, buscarUm : (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM controleponto.ponto WHERE funcionario = ? ', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return
                }
                if (results.length > 0) {
                    aceito(results)
                }
                else {
                    aceito(false)
                }
            })
        })
    // }, inserir : (funcionario, dia, entrada, saida) => {

    //     return new Promise((aceito, rejeitado) => {

    //         db.query(`INSERT INTO controleponto.ponto (funcionario, dia, entrada, saida) VALUES (?, ?, ?, ?)`,
    //          [funcionario, dia, entrada, saida], 
    //         (error, results) => {
    //             if (error) {
    //             rejeitado(error);
    //             return;
    //         }
    //             aceito(results.insertId)
                
    //         })
    //     })

    }

}