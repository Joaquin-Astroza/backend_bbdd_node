const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'likeme',
    port: 5432,
    allowExitOnIdle: true
});

const agregarPost = async (titulo, img, descripcion, likes) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, img, descripcion, likes]
    const result = await pool.query(consulta, values)
    console.log("Se agrego correctamente")
}


const obtenerPost= async () => {
    const {rows} = await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows
}
obtenerPost()
const getDate = async () => {
    const result = await pool.query("SELECT NOW()")
    console.log(result)
    }
    getDate()
module.exports = { agregarPost, obtenerPost };