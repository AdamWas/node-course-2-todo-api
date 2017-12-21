// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect do MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text : "Sleep",}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text : "Take a walk",}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({text : "Something to do",}).then((result) => {
    console.log(result);
  });

  db.close();
});
