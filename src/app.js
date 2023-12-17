import express from 'express'
import employees_router from './routes/employees.routes.js'
import index_router from './routes/index.routes.js'


const app = express();
app.use(express.json());

app.use(employees_router);
app.use(index_router);

export default app
