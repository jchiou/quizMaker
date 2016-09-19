import React from 'react';
import QuestionView from './QuestionView';
import Score from './Score';

const StudentView = (props) => {
  if (props.showScore) {
    return(
      <Score score={props.score} questions={props.questions} />
    )
  }

  else {
      return(

      <div>

      <h2>Good luck!</h2>

      { props.questions.length > 0 ? 
        <QuestionView question={props.questions[props.currentQ]}
                      questions={props.questions} 
                      key={props.currentQ}
                      currentQ={props.currentQ}
                      submitAnswer={props.submitAnswer}
                      nextQ={props.nextQ}
                      prevQ={props.prevQ}
        /> : null
      }

        <div className="questionCount">
          {props.currentQ + 1} / {props.questions.length}
        </div>
      </div>

    )
  }

}

export default StudentView;