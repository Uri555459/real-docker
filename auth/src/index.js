const express = require('express')
const { connectDb } = require('./helpers/db')
const { port, host } = require('./configuration')

const app = express()

app.use(express.json())

const startServer = () => {
	app.listen(port, async () => {
		console.log(`Сервер AUTH запущен на порту ${port}`)
		console.log(`Хост ${host}`)
	})
}

app.get('/auth', (req, res) => {
	res.send('Сервер AUTH запущен и работает.')
})

connectDb()
	.on('error', console.log)
	.on('disconnect', connectDb)
	.once('open', startServer)
