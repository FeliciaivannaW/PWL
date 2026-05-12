const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    fs.readFileSync('public/index.html', (error, data) => {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/html'})
            return response.end('File not Found (404)')
        }
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(data)
        return response.end()
    })
})

const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server run at port ${PORT}`)
})