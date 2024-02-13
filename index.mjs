import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.mjs'
import User from './models/User.mjs';


const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Ponte para os arquivos estáticos
app.use(express.static('public'));


/* Rotas para cadastrar Usuários */

// Criando template para cadastro
app.get('/users/create', (req, res) => {
    res.render('adduser')
})

// Criando rota para criar POST no DB
app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    // Criando no DB
    await User.create({name, occupation, newsletter})

    res.redirect('/')
})

/* Rota DELETE */
app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id
    await User.destroy({ where: {id: id} })

    res.redirect('/')
})

/* Rota GET ALL (Home) */
app.get('/', async (req, res) => {
    const users = await User.findAll({raw: true}) // raw para poder trazer os dados prontos
    console.log(users)

    res.render('home', {users: users});
});

/* Rota GET ID */
app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: {id: id} }) // Resgatando usuário por ID

    res.render('userview', {user})
})


// Sincronização para a aplicação funcionar
conn.sync().then(() => {
    app.listen(3000)
}).catch(err => console.log(err))

console.log('Diretório de trabalho atual:', process.cwd());
