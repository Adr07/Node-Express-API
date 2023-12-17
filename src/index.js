import app from './app.js'
import {PORT} from './confg.js'

app.listen(PORT)
console.log(`Server running on port ${PORT}`)