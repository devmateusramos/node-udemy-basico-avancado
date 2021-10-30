const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const products = [
    {
        id: 1,
        title: 'livro',
        price: 12.99
    },
    {
        id: 2,
        title: 'cadeira',
        price: 39.99
    },
    {
        id: 3,
        title: 'lâmpada',
        price: 2.99
    }      
];

app.get('/', (req, res) => {
    res.render('home', { products });
});

app.get('/product/:id', (req,res) => {
    const product = products[parseInt(req.params.id) - 1];
    
    res.render('product', { product });
});

app.listen(3000);