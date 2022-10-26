const mysql = require('mysql');
const db = mysql.createConnection({
    host: '82.180.153.154',
    user:'sql817.main-hosting.eu',
    password:'12345678Gg',
    port:3306,
    database:'u888185272_dadosport',
    multipleStatements: true
});
db.connect((erro) => {
    if(erro){
        throw erro
    }else{
        console.log(`conectado ao banco de dados `)
    }
    
   
});
global.db = db;
module.exports = db;