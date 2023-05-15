const express = require('express');
const sequelize = require('./config/connection');
const path = require("path");
const exphbs = require('express-handlebars');
const models = require ("./controllers");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(controllers);

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('Server is opened');
    });
});