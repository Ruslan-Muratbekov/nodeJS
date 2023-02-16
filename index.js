const Application = require('./framework/Application')
const parseJson = require('./framework/parseJson')
const router = require('./src/user-router')
const parseURL = require('./framework/parseURL')

const PORT = process.env.PORT || 5000
const app = new Application()

app.use(parseJson)
app.use(parseURL('http://localhost:5000'))
app.addRouter(router)

app.listen(PORT, () => console.log(`Server started on URL http://localhost:${PORT}/`))