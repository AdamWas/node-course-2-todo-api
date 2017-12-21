// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect do MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({name: 'Adam'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Adam'}).count().then((count) => {
    console.log(count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a3c23df1bd9f835c4a17fec')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.close();
});
