const db = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        database: 'test'
    }
})


 db.raw(`select * from carlist`).then(result => {
    console.log(result)
})






