var request = require('supertest');

describe('Express server', function () {
  let server;

  beforeEach(function () {
    // Force server to reload for each test
    delete require.cache[require.resolve('../index.js')];
    server = require('../index.js');
  });
  afterEach(function (done) {
    server.close(done);
  });

  it('redirects from /', function(done) {
    request(server)
      .get('/')
      .expect(301, done);
  });

  it('responds to /quiz/', function(done) {
    request(server)
      .get('/quiz/')
      .expect(200, done);
  });

  it('can post answers to /quiz/submit/', function(done) {
    request(server)
      .post('/quiz/submit/')
      .field('answers', Array(10).fill('a'))
      .expect(200, done);
  });

  it('serves Javascript at /bundle.js', function(done) {
    this.timeout(10000); // Bundling may take some time

    request(server)
      .get('/bundle.js')
      .expect(200)
      .expect('Content-Type', 'application/javascript', done);
  });

  it('404s non-existent page', function(done) {
    request(server)
      .get('/foobar')
      .expect(404, done);
  });
});
