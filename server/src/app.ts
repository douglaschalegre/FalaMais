import express from 'express';
import cors from 'cors';
import routes from './routes'
import { errors } from 'celebrate';

const app = express();
const PORT = 1337;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());    

app.listen(process.env.PORT || PORT);
console.log(`Rodando servidor na porta ${process.env.PORT || PORT}...`)