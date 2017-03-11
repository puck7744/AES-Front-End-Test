var assert = require('assert');

describe('Question set', function () {
  let QuestionSet = require('../src/QuestionSet');
  let questions;

  beforeEach(function () {
    questions = new QuestionSet();
  });

  it('can be chained', function() {
    assert.equal(questions, questions.select());
    assert.equal(questions, questions.noanswers);
  });
  it('#array returns valid question objects', function() {
    questions.array.forEach((question) => {
      assert.notEqual(question.text, undefined);
      assert.notEqual(question.answer, undefined);
      assert.notEqual(question.choice_a, undefined);
    });
  });
  it('#select(10).array returns a 10 element array', function() {
    assert.equal(questions.select(10).array.length, 10);
  });
  it('#select(0).array returns an empty array', function() {
    let result = questions.select(0).array;

    assert.equal(result.constructor, Array);
    assert.equal(result.length, 0);
  });
  it('#select(1000).array returns all questions', function() {
    let length = questions.array.length;

    assert.equal(questions.select(1000).array.length, length);
  });
  it('#noanswers leaves no answer properties', function() {
    let result = questions.noanswers.array;

    for (var i in result) {
      assert.equal(result[i].answer, undefined);
    }
  });
});
