const request = require('supertest');
const app = require('../lib/app');
// { name: 'danny', lastname: 'suarez', age: '28', gender: 'male' }

describe('Routes', () => {
  it('can create a person with POST', () => {
    return request(app)
      .post('/api/v1/people')
      .send({ name: 'danny', lastname: 'suarez', age: 28, gender: 'm'  })
      .then(res => {
        expect(res.body).toEqual({
          name: 'danny',
          lastname: 'suarez',
          age: 28,
          gender: 'm'
        });
      });
  });
});

