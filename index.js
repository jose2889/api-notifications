const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
// Setup a webhook route
app.use(bodyParser.json())

app.get('/ ', (req, res) => {
    console.log(req.body) // print all response
  
    //messageFrom=req.body['data']['from'] // sender number
    //messageMsg=req.body['data']['body'] // Message text
    res.send("Servidor en linea!!!")
  })

app.post('/notifications ', (req, res) => {
  console.log(req.body) // print all response

  //messageFrom=req.body['data']['from'] // sender number
  //messageMsg=req.body['data']['body'] // Message text
  res.status(200).end()
})

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}🚀 `))