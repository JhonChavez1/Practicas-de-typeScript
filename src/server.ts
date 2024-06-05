
// npx ts-node src/server.ts


import express from 'express';
import path from 'path';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
// configuracion del servidor para server archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});