const express = require('express')

const app = express()

app.get('/test', (req, res) => {
	res.send('Сервер запущен и работает.')
})

app.listen(3000, console.log('Сервер API запущен'))
