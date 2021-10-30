const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars'); 

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprendendo node',
        category: 'Javascript',
        body: 'Este artigo vai...',
        comment: 4
    };

    res.render('blogpost', { post })
})

app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c'];

    res.render('dashboard', {items})
})

app.get('/', (req, res) => {
    const auth = true;
    const approved = true;
    const user = {
        name: 'Mateus',
        surname: 'Ramos',
        age: 22
    };
    const anyWord = 'Posso adicionar qualquer palavra';

    res.render('home', { user: user, anyWord, auth, approved }); // por ser mesmo nome poderia deixar somente o user que funcionaria
});

app.listen(3000, () => {
    console.log('App funcionando!');
});

