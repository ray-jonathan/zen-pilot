require('dotenv').config();
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
const escapeHtml = require('escape-html');
const helmet = require('helmet');
const axios = require('axios');
app.use(helmet());
app.use(express.urlencoded({extended:true}));
const homeRouter = require('./routes/home');
const blogRouter = require('./routes/blog');
const aboutRouter = require('./routes/about');
const pressRouter = require('./routes/press');
const checklistsRouter = require('./routes/checklists');


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const PORT = process.env.PORT;
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
const DB_HOST = process.env.DB_HOST;
// const DB_NAME = process.env.DB_NAME;


app.use(express.static('public'));


app.get('/', homeRouter);
app.get('/blog', blogRouter);
app.get('/checklists', checklistsRouter);
app.get('/about', aboutRouter);
app.get('/press', pressRouter);


// app.all('*', (req, res) => {
//     res.render('404');
// });

app.listen(PORT, () => {
    console.log(`listening to ${DB_HOST}:${PORT}`);
});
