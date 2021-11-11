const express = require("express")
const products = require("./data/products")

const app = express()

app.get("/", (req, res) => {
    res.send("api is coming up")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    console.log(req.params)
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log("welcome to port 5000"))