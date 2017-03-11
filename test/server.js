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

  it('responds to /', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('serves Javascript at /bundle.js', function(done) {
    this.timeout(10000); // Bundling may take some time
    
    request(server)
      .get('/bundle.js')
      .expect(200)
      .expect('Content-Type', 'application/javascript', done);
  });

  it('404 non-existent page', function(done) {
    request(server)
      .get('/foobar')
      .expect(404, done);
  });
});
