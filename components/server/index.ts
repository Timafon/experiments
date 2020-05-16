import app from '../app'
import http from 'http'

// Get port from environment and store in Express.
const port = (process.env.PORT || 4000)

app.set('port', port)

const listeningListener = () => {
	console.info(`app start at port: ${port}`)
}

// Create HTTP server.
const server = http.createServer(app)
	.listen(app.get('port'), listeningListener)
