const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

const server = require('http').Server(app)
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

app.post('/notificationws', (req, res) => {
    
    let { message, number } = req.body
    number = cleanNumber(number);
    console.log("Enviando al numero ", number)
    let msj = 
        `Estimado *${message}* le notificamos que se ha agendado su reserva con exito 🙂🤖\n Para su comodidad se ha enviado una notificación a su correo donde podra gestionar su reserva \n`;
    
    client.sendMessage(number, message);

    res.send({ status: 'Ok' })
}
)

app.use(bodyParser.json())
server.listen(port, () => {
    console.log(`El server esta listo por el puerto ${port}`);
})