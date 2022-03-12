var api = require('./src/api.js').app;
var users = require('./src/users.json');

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/users', function (request, response) {
  response.json(users);
});

api.put('/users', function (request, response) {
  users[users.length] = request.body;
  response.json('User was saved succesfully');
});

api.delete('/users/:index', function (request, response) {
  users.splice(request.params.index, 1);
  response.json('User with index ' + request.params.index + ' was deleted');
});

api.patch('/users', function (request, response) {
  users[request.body.index] = request.body.user;
  response.json('User with index ' + request.body.index + ' was updated');
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});
