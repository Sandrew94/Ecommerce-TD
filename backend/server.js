import express from "express"
import dotenv from "dotenv"
import colors from "colors"

import connectDB from "./config/db.js"
import products from "./data/products.js"

const app = express()

dotenv.config()

connectDB()

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`welcome in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))