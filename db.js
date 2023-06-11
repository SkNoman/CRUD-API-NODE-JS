// const sql_con={
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// }

// const db = require('knex')({
//     client: 'mysql2',
//     connection: sql_con
// })

// db.raw('SELECT 1').then(function(){
//     console.log(`${process.env.DB_NAME} -database is conected using knex`)
//     console.groupEnd()
// })

// module.exports=db