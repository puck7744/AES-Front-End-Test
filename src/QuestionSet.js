var questionData = require('../data/questions.json');

// Filter invalid questions
(() => {
  let invalid = 0;

  questionData.forEach((question, i) => {
    if (question.text === undefined || question.answer === undefined || question.choice_a === undefined) {
      questionData.splice(i, 1); // Remove from the array
      invalid++;
    }
  });

  console.log(`Found ${invalid} invalid questions in source file`);
})();

class QuestionSet {
  constructor() {
    // Clone the data
    this.questions = [];
    questionData.forEach((question) => {
      this.questions.push(Object.assign({}, question));
    });
  }

  select(num) {
    if (num === undefined) num = 10;
    num = Math.min(Math.max(0, num), this.questions.length);

    let finalQuestions = [];

    let randomQuestion = () => {
      let x = Math.floor(Math.random() * this.questions.length);
      let q = this.questions[x];
      this.questions.splice(x, 1);
      return q;
    };

    for (let i = 0; i < num; i++) finalQuestions.push(randomQuestion());
    this.questions = finalQuestions;

    return this;
  }

  get noanswers() {
    this.questions.map(function(obj) { delete obj.answer; });

    return this;
  }

  get array() {
    return this.questions;
  }
}

module.exports = QuestionSet;
