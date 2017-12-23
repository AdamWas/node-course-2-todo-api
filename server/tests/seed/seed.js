const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const usetTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'adam@test.pl',
  password: 'userOnePassword',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: usetTwoId,
  email: 'marian@test.pl',
  password: 'userTwoPassword'
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First todo'
}, {
  _id: new ObjectID(),
  text: 'Second todo'
}, {
  _id: new ObjectID(),
  text: 'Third todo',
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
