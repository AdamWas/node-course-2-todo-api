const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash, '\n');
  });
});

var hashedPassword = '$2a$10$F4UQaQVeZH1J4ETrqQM3vOCu4wDxnAta9aQYia0FvwkCDxogrvt3K';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
