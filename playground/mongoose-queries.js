const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a3d3bff77455970155718c01';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Invalid ID');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found!');
//   }
//   console.log('Todo by id: ', todo);
// }).catch((e) => console.log(e));

// 5a3c4438f737d13435533aec

User.findById('5a3c4438f737d13435533aec').then((user) => {
  if(!user) {
    return console.log('User not found!');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
