import Address from './models/Address.mjs';
import exphbs from 'express-handlebars';
import User from './models/User.mjs';
import conn from './db/conn.mjs'
import express from 'express';


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

/* Rota UPDATE */
app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findOne({ include: Address, where: {id: id} }) // =>Address busca todos os endereços relacionados ao usuário
        res.render('useredit', { user: user.get({ plain: true }) })
    } catch (error) {
        console.log(error)
    }
})

app.post('/users/update', async (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {where: {id: id}})

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

/* Rota para Cadastrar endereço (Relacional com User) */
app.post('/address/create', async (req, res) => {
    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city

    const address = {
        UserId,
        street,
        number,
        city
    }

    await Address.create(address)

    res.redirect(`/users/edit/${UserId}`)
})

// Rota DELETE Address
app.post('/address/delete', async (req, res) => {
    const UserId = req.body.UserId
    const id = req.body.id

    await Address.destroy({
        where: {id: id},
    })
    res.redirect(`/users/edit/${UserId}`)
})


// Sincronização para a aplicação funcionar
conn
.sync()
//.sync({ force: true }) //para apagar todos os dados do DB (se for necessário)
.then(() => {
    app.listen(3000)
}).catch(err => console.log(err))

console.log('Diretório de trabalho atual:', process.cwd());
