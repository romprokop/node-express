const http = require('http');

const server = http.createServer((req, res) => {
	console.log('request event');
	res.end('hello world');
})

server.listen(5759, () => {
	console.log('Server listening on port : 5759...')
})