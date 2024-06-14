import express from 'express';
import router from './routes/index.js';
import manipulador404 from './middlewares/manipulador404.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';


const app = express();
app.use(express.json());
router(app);

app.use(manipulador404)
app.use(manipuladorDeErros)

export default app;