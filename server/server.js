/* eslint-disable no-console */
import express from 'express';

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
const consoleMsg = 'Enter http://localhost:3000/ in your browser';
app.listen(3000, () => console.log(consoleMsg));
