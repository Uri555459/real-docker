const express = require('express')
const { connectDb } = require('./helpers/db')
const { port, host, db } = require('./configuration')

const app = express()

app.use(express.json())

const startServer = () => {
	app.listen(port, () => {
		console.log(`Сервер API запущен на порту ${port}`)
		console.log(`Хост ${host}`)
		console.log(`Подключение к базе данных ${db}`)
	})
}

app.get('/test', (req, res) => {
	res.send('Сервер запущен и работает.')
})

connectDb()
	.on('error', console.log)
	.on('disconnect', connectDb)
	.once('open', startServer)
