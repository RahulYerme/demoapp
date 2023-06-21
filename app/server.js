const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello... This is deployment of node.js application to AKS using azure pipelines.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
