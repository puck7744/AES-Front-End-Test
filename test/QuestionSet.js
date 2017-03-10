var assert = require('assert');

describe('Question set', function () {
  let QuestionSet = require('../src/QuestionSet');
  let questions;

  beforeEach(function () {
    questions = new QuestionSet();
  });
  afterEach(function (done) {
    delete questions;
  });

  it('can be chained');
  it('#array returns question objects')
  it('#narrow(10).array returns a 10 element array');
  it('#narrow(0).array returns an empty array');
  it('#narrow(1000).array returns all questions');
  it('#noanswers leaves no answer properties');
});
