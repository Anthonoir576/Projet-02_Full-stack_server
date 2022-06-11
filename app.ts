
const express  = require('express');
const cors     = require('cors');
const app      = express();

import path    from 'path';
import helmet  from 'helmet';  



require('dotenv').config({ path: './src/config/.env' });    


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/src/images',
express.static(path.join(__dirname, 'images')));  




module.exports = app;