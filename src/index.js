var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", function (request, response) {
  response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
});

app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  response.sendStatus(200);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// const express = require('express');
// const app = express();
// const morgan=require('morgan');
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())

// //Configuraciones
// app.set('port', process.env.PORT || 3000);
// app.set('json spaces', 2)

// app.get('/', (req, res) => {    
//   res.json(
//       {
//           "Title": "Hola mundo"
//       }
//   );
// })

//Routes
// app.use(require('./routes/index'));

// //Iniciando el servidor, escuchando...
// app.listen(app.get('port'),()=>{
//   console.log(`Server listening on port ${app.get('port')}`);
// });

// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = process.env.PORT || 3000

// const server = require('http').Server(app)
// // Setup a webhook route
// app.use(bodyParser.json())

// app.get('/ ', (req, res) => {
//     console.log(req.body) // print all response
  
//     //messageFrom=req.body['data']['from'] // sender number
//     //messageMsg=req.body['data']['body'] // Message text
//     res.send("Servidor en linea!!!")
//   })

// app.post('/notifications ', (req, res) => {
//   console.log(req.body) // print all response

//   //messageFrom=req.body['data']['from'] // sender number
//   //messageMsg=req.body['data']['body'] // Message text
//   res.status(200).end()
// })

// app.post('/notificationws', (req, res) => {
    
//     let { message, number } = req.body
//     number = cleanNumber(number);
//     console.log("Enviando al numero ", number)
//     let msj = 
//         `Estimado *${message}* le notificamos que se ha agendado su reserva con exito 🙂🤖\n Para su comodidad se ha enviado una notificación a su correo donde podra gestionar su reserva \n`;
    
//     client.sendMessage(number, message);

//     res.send({ status: 'Ok' })
// }
// )

// app.use(bodyParser.json())
// server.listen(port, () => {
//     console.log(`El server esta listo por el puerto ${port}`);
// })