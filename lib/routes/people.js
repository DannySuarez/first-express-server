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
  })
  .get('/:id', (req, res) => {
    res.send(people[req.params.id]);
  })
  .get('/:id', (req, res) => {
    const {
      name,
      lastname,
      age,
      gender,
    } = req.body;

    const updatePeople = {
      name,
      lastname,
      age,
      gender
    };

    people[req.params.id] = updatePeople;
    res.send(updatePeople);
  });
    
  
