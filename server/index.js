require('dotenv').config({ path: __dirname+'/.env'})

const app = require('./app')
const sequelize = require('./app/models').sequelize
const models = require('./app/models').Sequelize

const PORT = process.env.PORT || 9000

sequelize.sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  })
})