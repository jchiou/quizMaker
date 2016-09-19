import React, { Component } from 'react';
import TeacherView from './TeacherView';
import StudentView from './StudentView'

const fakeQs = [{Q: 'What is the capital of California?', A: 'Sacramento'},
                {Q: 'What is the capital of Delaware?', A: 'Wilmington'}]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentView: false,
      trueFalse: false,
      shortAnswer: true,
      tempA: '',
      tempQ: '',
      questions: [],
      answered: [],
      currentQ: 0,
      score: 0,
      showScore: false
    }
  }
  changeView() {
    this.state.studentView ? this.setState({ studentView: false }) : this.setState({ studentView: true })
  }
  // set state to True/False 
  setToTF() {
    this.setState({
      trueFalse: true,
      shortAnswer: false
    })
  }
  // set state to Short Answer
  setToSA() {
    this.setState({
      shortAnswer: true,
      trueFalse: false
    })
  }
  setQuestion(event) {
    this.setState({
      tempQ: event.target.value
    })
  }
  // sets answer as user types or chooses T/F
  setAnswer(event) {
    this.setState({
      tempA: event.target.value
    })
  }
  // finalizes Q/A into state
  submit() {
    var questionCopy = this.state.questions.slice()
    this.state.shortAnswer ? questionCopy.push({ Q: this.state.tempQ, A: this.state.tempA, shortAnswer: true }) : questionCopy.push({ Q: this.state.tempQ, A: $('#tf').val(), shortAnswer: false })
    this.setState({
      questions: questionCopy,
      tempQ: '',
      tempA: '',
      selectValue: true
    })
  }
  // Functions for student view
  submitAnswer(answer) {
    this.saveAnswer();

    var score = 0;
    // now to iterate over answered questions
    this.state.answered.forEach(answer => {
      // count the amount of correct answers. 
      if (answer.Correct === true) {
        score++
      }
    })

    this.setState({
      score: score,
      showScore: true
    })

    console.log('showSocre is now', this.state.showScore)
  }
  saveAnswer() {
  // save answer
    var questions = this.state.questions
    var curr = this.state.currentQ
    var answered = this.state.answered.slice()
    if (questions[curr].shortAnswer) {
      answered.push({ Q: questions[curr].Q, Correct: $('#sa-student').val() == questions[curr].A })
    } else {
      answered.push({ Q: questions[curr].Q, Correct: $('#tf-student').val() === questions[curr].A })
    }
    this.setState({
      answered: answered
    })
  }
  nextQ() {
    this.saveAnswer();

    this.setState({ 
      currentQ: this.state.currentQ + 1,
    })
  }

  prevQ() {
    this.saveAnswer();

    this.setState({ currentQ: this.state.currentQ - 1 })
  }

  render() {
    return(
      <div className="container">
        <div className="changeView">
          <a href="#" onClick={ this.changeView.bind(this) }>Toggle View</a>
        </div>
        { this.state.studentView ? 
          <div>
            <h1>QuizTaker</h1>
              <StudentView
                nextQ={this.nextQ.bind(this)}
                prevQ={this.prevQ.bind(this)}
                submitAnswer={this.submitAnswer.bind(this)}
                questions={this.state.questions}
                answered={this.state.answered}
                currentQ={this.state.currentQ}
                showScore={this.state.showScore}
                score={this.state.score}
              />
          </div> 
          : 
          <div>
            <h1>QuizMaker</h1>
              <TeacherView 
                submit={this.submit.bind(this)}
                setAnswer={this.setAnswer.bind(this)}
                setQuestion={this.setQuestion.bind(this)}
                setToSA={this.setToSA.bind(this)}
                setToTF={this.setToTF.bind(this)}
                tempQ={this.state.tempQ}
                tempA={this.state.tempA}
                questions={this.state.questions}
                trueFalse={this.state.trueFalse}
                shortAnswer={this.state.shortAnswer}
              />
          </div> }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));