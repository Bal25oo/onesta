import express from 'express';
import cors from 'cors';
import cosechaRutas from './rutas/cosecha_rutas';
import "reflect-metadata";
import { createConnection } from 'typeorm';

const app = express();
const port= 3000;
createConnection();

app.use(cors());
app.use(express.json());

app.use('/api_cos', cosechaRutas);

app.listen(port, () => {
    console.log('Server expres en: http://localhost:${port}')
})