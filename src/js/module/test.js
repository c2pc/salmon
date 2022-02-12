import {questions} from './questions'
import {presents} from './present'

const getStages = (...stages) => {
  return ['main', 'tests', 'end'].filter(item => !stages.includes(item))
}
const main = document.querySelector(".main-container")
const end = document.querySelector(".end-block")
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
    this.setVisible(end)
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
    switch (this.points) {
      case 11:
      case 12:
      case 13:
        this.setPresent(40, 20)
        break;
      case 14:
      case 15:
      case 16:
      case 17:
        this.setPresent(60, 100)
        break;
      case 18:
      case 19:
      case 20:
      case 21:
        this.setPresent(80, 100)
        break;
      case 22:
      case 23:
      case 24:
        this.setPresent(100, 100)
        break;
      case 8:
      case 9:
      case 10:
      default:
        this.setPresent(20, 20)
        break;
    }
  },
  setPresent: function (percent, salmon) {
    end.querySelector(".heart img").src = `img/heart${percent}.svg`
    end.querySelector(".heart source").srcset = `img/heart${percent}.svg`

    end.querySelector(".salmon img").src = `img/salmon${salmon}.png`
    end.querySelector(".salmon source").srcset = `img/salmon${salmon}.png`

    const present = presents[percent]
    end.querySelector(".present-container .header").innerHTML = `Вы лосось, влюблённый в себя на ${percent}%`
    end.querySelector(".present-container .description").innerHTML = present.text
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
