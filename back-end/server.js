const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

const dataRouter = require('./routes/data');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/data', dataRouter);

// const dataRouter = require('./routes/data');
// app.use('/data', dataRouter);

app.listen(PORT, () => {
  console.log(`${PORT}번에서 작동중`);
});
