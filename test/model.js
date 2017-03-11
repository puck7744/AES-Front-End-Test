var assert = require('assert');

describe('Quiz model', function () {
  let QuestionSet = require('../src/model/Quiz.js');
  let questions;

  beforeEach(function () {
    questions = new QuestionSet();
  });

  it('can be chained', function() {
    assert.equal(questions, questions.select());
    assert.equal(questions, questions.clone);
    assert.equal(questions, questions.noanswers);
  });

  it('can accept an input array', function() {
    questions = new QuestionSet([{answer: 'A'}]);

    assert.equal(questions.array[0].answer, 'A');
  });

  it('#array returns valid question objects', function() {
    questions.array.forEach((question) => {
      assert.notEqual(question.text, undefined);
      assert.notEqual(question.answer, undefined);
      assert.notEqual(question.choice_a, undefined);
    });
  });

  it('#select(1000).array returns all questions', function() {
    let length = questions.array.length;

    assert.equal(questions.select(1000).array.length, length);
  });
  it('#select(10).array returns a 10 element array', function() {
    assert.equal(questions.select(10).array.length, 10);
  });
  it('#select(i).array returns an empty array for i <= 0', function() {
    let result = questions.select(0).array;

    assert.equal(result.constructor, Array);
    assert.equal(result.length, 0);

    result = questions.select(-1).array;

    assert.equal(result.constructor, Array);
    assert.equal(result.length, 0);
  });

  it('#clone returns new objects', function() {
    let first = questions.array;
    let second = questions.clone.array;

    second[0].changed = true;
    second[1] = null;

    assert.notEqual(first[0].changed, true);
    assert.notEqual(first[1], null);
  });

  it('#noanswers leaves no answer properties', function() {
    let result = questions.noanswers.array;

    for (var i in result) {
      assert.equal(result[i].answer, undefined);
    }
  });
});
