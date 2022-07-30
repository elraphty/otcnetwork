import request from 'supertest';
import {expect} from 'chai';
import app from '../../src/app';

beforeEach((done) => {
  app.listen(done);
});

describe('Test API routes', function () {
  it('Index route responds with a message', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.statusCode).equal(200);
        expect(res.text).includes('This is the index route');

        return done();
      });
  });

  it('404 routes responds with an error message', function (done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .end((err, res) => {
        if (err) return done(err);
 
        expect(res.statusCode).equal(404);
        expect(res.text).includes('You are hitting a wrong route, find the valid routes below');
        
        return done();
      });
  });
});
