const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.static('public'));

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'Javascript/ Typescript',
            body: 'Teste',
            comments: 4
        },
        {
            title: 'Aprender Flutter',
            category: 'Dart',
            body: 'Teste',
            comments: 5
        },
        {
            title: 'Aprender Automação e Django',
            category: 'Python',
            body: 'Teste',
            comments: 3
        }
    ];

    res.render('blog', { posts });
});

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

