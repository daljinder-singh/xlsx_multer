'use strict';
import express from 'express';
import path from 'path';
import routes from './src/router/routes.js';
const __dirname = path.resolve();
const app = express();
import connection from './src/database/connection.js'

app.use(express.urlencoded({extended:true}));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(routes)
  
const PORT = 5000;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
    connection();
})