const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const db = require('./config/db');
const route =  require('./routes/index')

//connect to db
db.connect();

const port = 3000;


app.use(express.static(path.join(__dirname,'public')));

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname,'resource/views'));

route(app);

app.listen(port, () => console.log("Running"));