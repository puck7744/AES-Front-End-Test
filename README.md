# AES Front End Development Skill Test
Implementation by Tristan Shelton

[![Build Status](https://travis-ci.org/puck7744/AES-Front-End-Test.svg?branch=master)](https://travis-ci.org/puck7744/AES-Front-End-Test)
[![Coverage Status](https://coveralls.io/repos/github/puck7744/AES-Front-End-Test/badge.svg?branch=master)](https://coveralls.io/github/puck7744/AES-Front-End-Test?branch=master)

---

## About
See https://github.com/Ken-Richard/front-end-interview-skill-challenge for details on the original project.

The original `questions.json` can be found unmodified in the data directory.

## Try it out
See the app deployed at https://aes-test.herokuapp.com/quiz/

## Details
In assessing the project I considered that as a front end test it would be possible to import the JSON directly and focus solely on the front end work. However, I decided that to better represent a real world application all answer evaluation and grading should happen server-side.

In choosing technology I wanted something simple to set up, fast to iterate and easy to integrate with a GitHub workflow. This led me to consider both Ruby and Node, and I chose Node in the end in order to give server-side React a try, which I had never used before.

The final choices for technology were:
* Node.js
  - Express for server
  - Browserify for bundling
  - Mocha and Supertest for testing
  - Istanbul for coverage
  - NPM for building
* React
* Travis CI
* Coveralls.io
