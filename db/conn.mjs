import { Sequelize } from "sequelize";


// Dados para a conexão com DB
const sequelize = new Sequelize(
    'nodesequelize',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

/*
try {
    sequelize.authenticate()
    console.log('Conectado com Sucesso ao Sequelize')

} catch(err) {
    console.log('Não possível conectar ao banco: ', err)
}
*/

export default sequelize;