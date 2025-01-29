require('dotenv').config();
const express = require('express');
const app = express();
const personasRouter = require('./routes/personasRouter');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/personas', personasRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, 'localhost', () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
