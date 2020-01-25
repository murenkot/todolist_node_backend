//--------------------------------SETUP
// external modules
const express = require('express');
const bodyParser = require('body-parser');
// internal modules
const db = require('./models');
const routes = require('./routes');
// instanced module
const app = express();


//--------------------------------MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//-------------------------------CONFIGURATION VARIABLES
// const PORT = process.env.PORT || 3000;
require('dotenv').config();
const PORT = process.env.PORT;


// ---------------------- CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ------------------------------ROUTES

//SECTION  View Routes
// app.use('/', routes.todos);

// route, callback function(request,response)
// app.get('route', function(request, response))
// app.get('/api/v1', (req, res) => {
//   res.json({
//     status: 200,
//     message: 'Welcome to the Pokedex Api.',
//     endpoints: [
//       {
//         method: 'GET',
//         path: '/api/v1',
//         description: 'Describes all available endpoints.'
//       }
//     ]
//   });
// });

//SECTION  Todos Routes
app.use('/api/v1/todos', routes.todos);

//SECTION  Trainer Routes

// Index Route
// app.get('/api/v1/trainers', (req, res) => {
//   db.Trainer.find({})
//     .populate('pokemon')
//     .exec((error, allTrainers) => {
//       if (error) return console.log(error);
//       res.json({
//         status: 200,
//         count: allTrainers.length,
//         data: allTrainers,
//         requestedAt: new Date().toLocaleString()
//       });
//     });
// });

// Create Route
// app.post('/api/v1/trainers', (req, res) => {
//   db.Trainer.create(req.body, (error, createdTrainer) => {
//     if (error) return console.log(error);
//     res.json({
//       status: 201,
//       data: createdTrainer,
//       requestedAt: new Date().toLocaleString()
//     });
//   });
// });

// ------------------------------Start Server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));
