const express = require('express')

const app = express()

const port = process.env.PORT || 3000
const host = process.env.HOST

app.get('/test', (req, res) => {
	res.send('Сервер запущен и работает.')
})

app.listen(port, () => {
	console.log(`Сервер API запущен на порту ${port}`)
	console.log(`Хост ${host}`)
})
