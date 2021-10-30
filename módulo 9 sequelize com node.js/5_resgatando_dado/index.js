const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const User = require('./models/User');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/users/create', (req, res) => {
    res.render('adduser');
});

app.post('/users/create', async(req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if(newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    };

    console.log(req.body);

    await User.create({name, occupation, newsletter});

    res.redirect('/');
});

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw: true, where: { id: id} });
    
    res.render('userview', { user });
});

app.get('/', async (req, res) => {
    const users = await User.findAll({raw: true});

    console.log(users);

    res.render('home', { users: users });
});

conn.sync().then(() => {
    app.listen(3000);
}).catch(error => {console.log(error)});

