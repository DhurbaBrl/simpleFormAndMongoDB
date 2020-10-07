const express = require('express');
const hbs = require('hbs');
const userRouter = require('./routers/user');
const path = require('path');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log('The port is started in port ' + port + '.');
});
