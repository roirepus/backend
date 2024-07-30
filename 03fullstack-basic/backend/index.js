//require('dotenv').config()
//const express = require('express')
import 'dotenv/config'
import express from 'express'
const port = process.env.PORT || 4000
const app = express()

// app.get('/', (req, res) => {
// 	res.send('hii')
// })
app.get('/api/jokes', (req, res) => {
	const jokes = [
		{
			id: 1,
			title: 'first joke',
			content: 'the joke',
		},
		{
			id: 1,
			title: 'first joke',
			content: 'the joke',
		},

		{
			id: 1,
			title: 'first joke',
			content: 'the joke',
		},

	]
		res.send(jokes);
});


app.listen(port, () => {
	console.log(`listening on ${port}`)
})
