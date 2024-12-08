const express = require('express');
const cors = require('cors');
const { obtenerPost, agregarPost } = require('./consultas');
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Permitir solicitudes solo desde el frontend
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Métodos permitidos
  }));
app.use(express.json());

app.listen(3000,console.log(`Servidor corriendo`));
app.get('/posts', async (req,res) => {
    const posts = await obtenerPost();
    res.json(posts)
})

app.post('/posts', async (req,res) => {
    const {titulo, img, descripcion, likes} = req.body;
    await agregarPost(titulo, img, descripcion, likes);
    res.send("post agregado con éxito")
})

