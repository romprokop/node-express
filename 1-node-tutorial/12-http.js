const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		console.log(`req`, req)	
		res.end('Welcome to our homepage')
	} else if (req.url === '/about') {
		res.end('Welcome to our About page')
	} else {
		res.end(`
		<h1>Ooops!</h1>
		<p>We can't seem to find the page you are looking for</p>
		<a href="/">back home</a>
	`)
	}

})

// http://localhost:5759
server.listen(5759)
