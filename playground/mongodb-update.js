// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect do MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a3c33267bd2aae7b33d93b0')
  // }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a3c27f8f8d5e8345c5f4d2c')
  }, {
      $set: {
        name: 'Goo',
        surname: 'Chiang'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });


  db.close();
});


// {
//     "_id" : ObjectId("5a3c33267bd2aae7b33d93b0"),
//     "text" : "Eat something",
//     "completed" : false
// }
//

// {
//     "_id" : ObjectId("5a3c27f8f8d5e8345c5f4d2c"),
//     "name" : "Boo",
//     "age" : 34,
//     "location" : "PL"
// }
