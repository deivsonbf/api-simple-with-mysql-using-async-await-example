const mysql = require('../config');


// Rota GET
exports.allUsers = async (req, res) => {

    const sql = `SELECT * FROM usuarios;`

    try {
        const result = await mysql.execute(sql);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
};

// Rota POST
exports.insertUserOntwoTable = async (req, res) => {

    let msg = '';

    const sql1 = `insert into usuarios_ativos(nome , senha) values (? , ?);`

    const sql2 = `insert into usuarios(nome , senha) values (? , ?);`

    var parameter = [req.body.nome, req.body.senha]

    try {
        try {
            const result1 = await mysql.execute(sql1, parameter)
            msg += 'executou query 1 '
        } catch (error) {
            msg += ' nao executou query 1 '
        }

        const result2 = await mysql.execute(sql2, parameter);
        msg += 'e executou query 2'
        res.send(msg)

    } catch (error) {
        msg += ' nao executou query 2'
        res.send(msg)
    }


}