/**
 * The latest Express generator comes with a great practice that is worth to keep
 * - the API declaration is separated from the network related configuration (port, protocol, etc).
 * This allows testing the API in-process, without performing network calls,
 * with all the benefits that it brings to the table: fast testing execution and getting coverage metrics of the code.
 * It also allows deploying the same API under flexible and different network conditions.
 * Bonus: better separation of concerns and cleaner code
 * */

import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.get('/user', (req: Request, res: Response) => {
	res.status(200).json({ name: 'tobi' })
})

// npm package supertest
// request(app)
// 	.get('/user')
// 	.expect('Content-Type', /json/)
// 	.expect('Content-Length', '15')
// 	.expect(200)
// 	.end((err: Error) => {
// 		if (err) throw err;
// 	});

export default app
