const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars'); 

app.get('/', (req, res) => {
    const user = {
        name: 'Mateus',
        surname: 'Ramos',
        age: 22
    };
    const anyWord = 'Posso adicionar qualquer palavra';

    res.render('home', { user: user, anyWord }); // por ser mesmo nome poderia deixar somente o user que funcionaria
});

app.listen(3000, () => {
    console.log('App funcionando!');
});

