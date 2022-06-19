const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    //console.log("request made")
    console.log(req.url)
    //res.write("hello server")
    //res.end()
    let path = "./views/"
    switch (req.url) {
        case "/":
            path += "home.html"
            break;
        case "/about-s":
            res.statusCode = 301
            res.setHeader('Location', '/about')
            //res.end()
            break;
        case "/about":
            path += "about.html"
            break;

        default:
            res.statusCode = 404
            path += "404.html"
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }
        
            res.write(data)
            res.end()
        
    })
})

server.listen(5000, (err) => {
    err ? console.log(err) : console.log("server is listening at port 5000")
})