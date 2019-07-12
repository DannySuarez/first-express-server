const { Router } = require('express');

const people = [];

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
      lastname,
      age,
      gender
    } = req.body;

    people.push({ name, lastname, age, gender });

    res.send({
      name,
      lastname,
      age,
      gender
    });
  })
  .get('/', (req, res) => {
    res.send(people);
  });
    
  
