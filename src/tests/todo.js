import request from 'supertest';
import { expect } from 'chai';
import app from '../../app';

describe('Test for todo endpoints', () => {
  // test for error address
  describe('Test for wrong API address', () => {
    // test for api address
    it('should flag error for wrong url', (done) => {
      request(app)
        .get('/todos')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json')
        .expect(400)
        .end((err, res) => {
          expect(res.body.error).to.equal('the url you are trying to access does not exist');
          done();
        });
    });
  });
  // test for create endpoint
  describe('Test for create todo endpoint', () => {
    // test if title is supplied
    it('should check for title', (done) => {
      request(app)
        .post('/api/v1/todos')
        .send({
          status: 'progress',
          isCompleted: false,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(400)
        .end((req, res) => {
          expect(res.body.errors[0].msg).to.equal('title can not be empty');
          done();
        });
    });
    // it should check length of title
    it('should check the length of title', (done) => {
      request(app)
        .post('/api/v1/todos')
        .send({
          title: 'hjjjjjj kkllkk kkklnn kkklkkk hjjjjjj kkllkk kkklnn kkklkkk hjjjjjj kkllkk kkklnn kkklkkk',
          progress: 'processing',
          isCompleted: false,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('title should be less than 50 chars');
          done();
        });
    });
    // should create a todo
    it('should create new todo', (done) => {
      request(app)
        .post('/api/v1/todos')
        .send({
          title: 'tidy up the room',
          status: 'progress',
          isCompleted: false,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(201)
        .end((req, res) => {
          expect(res.body.message).to.equal('todo created successfully');
          done();
        });
    });
    // end for create endpoint
  });
  // test for update todo endpoint
  describe('Test for update todo endpoint', () => {
    // test if todo exists
    it('should check if todo exist', (done) => {
      request(app)
        .put('/api/v1/todos/10')
        .send({
          title: 'wash the car',
          status: 'progress',
          isCompleted: true,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .end((err, res) => {
          expect(res.body.error).to.equal('todo not found');
          done();
        });
    });
    // test if title is supplied
    it('should check for title', (done) => {
      request(app)
        .put('/api/v1/todos/1')
        .send({
          status: 'progress',
          isCompleted: false,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(400)
        .end((req, res) => {
          expect(res.body.errors[0].msg).to.equal('title can not be empty');
          done();
        });
    });
    // it should check length of title
    it('should check the length of title', (done) => {
      request(app)
        .put('/api/v1/todos/1')
        .send({
          title: 'hjjjjjj kkllkk kkklnn kkklkkk hjjjjjj kkllkk kkklnn kkklkkk hjjjjjj kkllkk kkklnn kkklkkk',
          progress: 'processing',
          isCompleted: false,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(400)
        .end((err, res) => {
          expect(res.body.errors[0].msg).to.equal('title should be less than 50 chars');
          done();
        });
    });
    // should create a todo
    it('should create new todo', (done) => {
      request(app)
        .put('/api/v1/todos/1')
        .send({
          title: 'wash the car',
          status: 'progress',
          isCompleted: true,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .end((req, res) => {
          expect(res.body.message).to.equal('todo updated successfully');
          done();
        });
    });
  });
  // test for retrieve todo endpoints
  describe('Test for retrieve todo', () => {
    // test to retrieve all todos
    it('should retrieve all todos', (done) => {
      request(app)
        .get('/api/v1/todos')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('todos retrieved successfully');
          done();
        });
    });
    // test if todo exists
    it('should check if todo exist', (done) => {
      request(app)
        .get('/api/v1/todos/10')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .end((err, res) => {
          expect(res.body.error).to.equal('todo not found');
          done();
        });
    });
    // test to retrieve todo by id
    it('should retrieve todo by id', (done) => {
      request(app)
        .get('/api/v1/todos/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('todo retrieved successfully');
          done();
        });
    });
  });
  // test for remove todo endpoint
  describe('Test for remove todo endpoint', () => {
    // test if todo exist
    it('should check if todo exist', (done) => {
      request(app)
        .del('/api/v1/todos/10')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .end((err, res) => {
          expect(res.body.error).to.equal('todo not found');
          done();
        });
    });
    // test to remove todo
    it('should remove todo', (done) => {
      request(app)
        .del('/api/v1/todos/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
        .end((err, res) => {
          expect(res.body.message).to.equal('todo removed successfully');
          done();
        });
    });
  });
  // end of test for todo endpoints
});
