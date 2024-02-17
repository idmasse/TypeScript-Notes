import "dotenv/config"
import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello from React, TypeScript and Express'))

export default app