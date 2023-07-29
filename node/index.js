const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const selectCommand = 'SELECT name FROM people'
const insertCommand = `INSERT INTO people(name) values('Novo Nome')`

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    connection.query(insertCommand)

    let response = '<h1>Full Cycle Rocks!</h1><ul>'
    connection.query(selectCommand, function (err, result, fields) {

        result.forEach(element => {
            response += '<li>' + element.name + '</li>';
        });

        response +='</ul>';
        connection.end();
        res.send(response)
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})