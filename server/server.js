/* eslint-disable no-console */
import express from 'express';

const app = express();

const PORT = 3000;

const firstController = (req, res) => res.send('Hello World!');

app.get('/', firstController);

const consoleMsg = `App running on PORT: ${PORT}`;

app.listen(PORT, () => console.log(consoleMsg));

export default app;

