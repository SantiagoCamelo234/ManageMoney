import app from './app.js'
import { connectDB } from './src/libs/sequelize.js'

connectDB()
app.listen(3001)
console.log('Listen on port', 3001)