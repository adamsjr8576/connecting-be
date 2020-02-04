const express = require('express');
const app = express();
var cors = require('cors');

var corsOptions = {
  origin: 'https://connecting-front-end.herokuapp.com/',
  optionsSuccessStatus: 200
}
const environment = process.env.NODE_ENV || 'development';
app.set('port', process.env.PORT || 3000);

app.locals.title = 'DOGS';
app.locals.dogs = [
  {
    breed: 'Chihuahua',
    age: 5,
    name: "Pip"
  },
  {
    breed: 'Husky',
    age: 10,
    name: "Sky"
  },
  {
    breed: 'Golden Retriever',
    age: 2,
    name: "Maximo"
  },
  {
    breed: 'Australian Shephard',
    age: 3,
    name: "Pooki"
  }
]

app.get('/api/v1/dogs', cors(corsOptions), (request, response, next) => {
  const { dogs } = app.locals;

  response.status(200).json(dogs);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
