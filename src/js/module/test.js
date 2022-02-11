import {questions} from './questions'

const getStages = (...stages) => {
  return ['main', 'tests', 'end'].filter(item => !stages.includes(item))
}
const main = document.querySelector(".main-container")
const tests = document.querySelector(".test-container")
const body = document.querySelector("body")
const number = tests.querySelector(".test__number")
const question = tests.querySelector(".test__question")
const answers = tests.querySelector(".test__answers")

const Test = {
  questions: [],
  stage: '',
  points: 0,
  test: 0,
  setStageMain: function () {
    this.setBody('main')
    this.stage = 'main'
    this.setHidden(tests)
    this.setVisible(main)
  },
  setStageEnd: function () {
    this.calcPoints()
    this.setBody('ends')
    this.stage = 'end'
    this.setHidden(main)
    this.setHidden(tests)
    //this.setVisible(end)
  },
  setStageTest: function () {
    this.setBody('tests')
    this.stage = 'test'
    this.setQuestions()
    this.setTest(0)
    this.setPoints(0)
    this.setHidden(main)
    this.setVisible(tests)
  },
  calcPoints: function () {
    this.points = this.questions.reduce((sum, question) => sum + question.answers[question.answer].points, 0)
    console.log(this.points)
  },
  setBody: function (classname) {
    body.classList.add(classname)
    body.classList.remove(...getStages(classname))
  },
  setQuestions: function () {
    this.questions = questions
  },
  setPoints: function (point) {
    this.points = point
  },
  setTest: function (test) {
    this.test = test

    number.innerHTML = `Вопрос ${test + 1} из ${this.questions.length}`
    question.innerHTML = this.questions[test].text

    let answersHtml = ''
    this.questions[test].answers.forEach((answer, index) => {
      answersHtml += `
        <div class="answer" id="answer${index}">
          <div class="check"></div>
          <div class="text">${answer.text}</div>
        </div>
      `
    })

    answers.innerHTML = answersHtml

    answers.querySelectorAll(".answer")
      .forEach((answer, index) =>
        answer.addEventListener("click", () => this.selectAnswer(index)))
  },
  setVisible: function (el) {
    el.classList.remove("hidden")
  },
  setHidden: function (el) {
    el.classList.add("hidden")
  },
  checkQuestion: function () {
    if (this.questions[this.test].answer !== undefined) {
      if (this.test !== this.questions.length - 1) {
        this.setTest(++this.test)
      } else {
        this.setStageEnd()
      }
    }
  },
  selectAnswer: function (index) {
    this.questions[this.test].answer = index;
    answers.querySelectorAll(".answer.selected")
      .forEach(answer => answer.classList.remove('selected'))
    answers.querySelector("#answer" + index).classList.add('selected')
  },
}

const test = Object.create(Test);
test.setStageMain()

const mainButtons = main.querySelectorAll(".button__main")
mainButtons.forEach(item => item.addEventListener('click', () => test.setStageTest()));

const buttonTest = tests.querySelector(".button__container")
buttonTest.addEventListener('click', () => test.checkQuestion())
document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (test.stage === 'test') {
      test.checkQuestion()
    } else if (test.stage === 'main') {
      test.setStageTest()
    }
  }
})
