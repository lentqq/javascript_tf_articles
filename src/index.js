
const express = require('express');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const config = require('./config/config');
const router = require('./config/router');
const app = express();
const dataBase = require('./config/dataBase');
dataBase(config);

app.engine('hbs', exhbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'hbs');

app.use(express.static('./public'));

router(app);

app.listen(config.port,
     () => console.log(`Listening on port ${config.port}...`));