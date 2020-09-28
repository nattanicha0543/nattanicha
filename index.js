const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const paht = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');
//router
app.use('/', router);

app.use(express.static(paht.join(__dirname,'public')));

app.listen(
    PORT,
  () => {
    console.log(`Listening to port ${PORT}`);
  }

);


