
import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import 'dotenv/config';

import './database';

const app = express();

app.use(express.json());
app.use(routes);


app.listen(`${process.env.HPORT}`, () => {
  console.log(`Server started on port ${process.env.HPORT}`);
});
