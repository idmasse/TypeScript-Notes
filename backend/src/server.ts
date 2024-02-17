import app from "./app"
import mongoose from "mongoose"
import env from "./util/validateEnv"

const port = env.PORT

mongoose.connect(env.DATABASE_URL)
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running at http://localhost:${port}`)
		})
	})
	.catch(console.error)

const db = mongoose.connection

db.on('connected', function () {
	console.log(`Mongoose connected to ${db.name} at ${db.host}:${db.port}`)
})
