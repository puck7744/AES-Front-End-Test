var assert = require('assert');

describe('Question set', function () {
  let QuestionSet = require('../src/QuestionSet');
  let questions;

  beforeEach(function () {
    questions = new QuestionSet();
  });
  afterEach(function() {
    delete questions;
  });

  it('can be chained', function() {
    assert.equal(questions, questions.narrow());
    assert.equal(questions, questions.noanswers);
  });
  it('#array returns question objects', function() {
    let question = questions.array[0];

    assert.notEqual(question.text, undefined);
    assert.notEqual(question.answer, undefined);
  });
  it('#narrow(10).array returns a 10 element array', function() {
    assert.equal(questions.narrow(10).array.length, 10);
  });
  it('#narrow(0).array returns an empty array', function() {
    let result = questions.narrow(0).array;

    assert.equal(result.constructor, Array);
    assert.equal(result.length, 0);
  });
  it('#narrow(1000).array returns all questions', function() {
    let length = questions.array.length;

    assert.equal(questions.narrow(1000).array.length, length);
  });
  it('#noanswers leaves no answer properties', function() {
    let result = questions.noanswers.array;

    for (var i in result) {
      assert.equal(result[i].answer, undefined);
    }
  });
});
