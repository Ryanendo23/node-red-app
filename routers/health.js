const express = require('express');

module.exports = function (app) {
  const router = express.Router();

  router.get('/', function (req, res, next) {
    res.json({
      status: 'UP'
    });
  });

  app.use('/health', router);
}var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
console.log("Original Array: " + languages);

// reversing array order
reversed_arr = languages.reverse();

// reverse() modifies the original array
console.log("Array after reverse(): " + languages);

// reverse() also returns the reversed array
console.log("Return Value of reverse(): " + reversed_arr);
