require('dotenv').config()
console.log("Chai aur Code")
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! Vikash Ji')
})

app.get('/twitter',(req, res)=>{
  res.send('The Vikash Goswami')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please login at Chai aur Code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>Chai aur Code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 