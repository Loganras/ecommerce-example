const express = require('express') // CommonJS Node syntax
// import express from 'express' // ESModule

const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.send(product)
})

app.listen(5000, console.log('server running on port 5000'))
