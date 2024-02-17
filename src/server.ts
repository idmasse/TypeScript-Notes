import express from 'express'

const app = express()
const PORT = 3001

app.get('/', (req, res) => res.send('Hello from React, TypeScript and Express'))

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`)
})
