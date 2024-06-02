const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { connectDb } = require('./helpers/db')
const { port, host, db } = require('./configuration')

const app = express()

app.use(cors())
app.use(express.json())

const postSchema = new mongoose.Schema({ name: String })
const Post = mongoose.model('Post', postSchema)

const startServer = () => {
	app.listen(3000, async () => {
		console.log(`Сервер API запущен на порту ${port}`)
		console.log(`Хост ${host}`)
		console.log(`Подключение к базе данных ${db}`)

		// const posts = await Post.find({})

		// console.log('posts', posts)

		const silence = new Post({ name: 'Silence' })
		const newSilence = await silence.save()
		console.log('newSilence: ', newSilence)
	})
}

app.get('/test', (req, res) => {
	res.send('Сервер TEST запущен и работает.')
})

connectDb()
	.on('error', console.log)
	.on('disconnect', connectDb)
	.once('open', startServer)
