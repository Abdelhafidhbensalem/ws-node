const express = require("express")

const app = express()

app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile("./views/home.html", { root: __dirname })
})
app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname })
})

app.get("/users", (req, res) => {
    res.send({ users: [{ name: "abs" }] })
})
const users = [{ name: "abs" }]
app.post("/users", (req, res) => {
    console.log(req.body)
    res.send({ users: [...users, req.body] })
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

const port = 5000
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server is running at port ${port} `)
})