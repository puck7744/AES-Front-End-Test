var request = require('supertest');

describe('loading express', function () {
  let server;

  beforeEach(function () {
    // Force server to reload for each test
    delete require.cache[require.resolve('../index.js')];
    server = require('../index.js');
  });
  afterEach(function (done) {
    server.close(done);
  });

  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('404 non-existent page', function testPath(done) {
    request(server)
      .get('/foobar')
      .expect(404, done);
  });
});
