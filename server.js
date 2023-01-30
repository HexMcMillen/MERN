const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

require('./server/config/mongoose.config');

const AllShelters = require('./server/routes/shelter.routes');
AllShelters(app);

app.listen(port, () => console.log(`Connected to port ${port}`));