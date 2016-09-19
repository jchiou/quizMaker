import React from 'react';

const QuestionView = (props) => {
  return(
    <div>
      
      <div className="prompt">
        Question:
        <h4>{props.question.Q}</h4>

        Your answer:
        { props.question.shortAnswer ? 
            <input type="text" id="sa-student"></input>
            : <div>
                <select id="tf-student">
                  <option>True</option>
                  <option>False</option>
                </select>
              </div> 
        }
      </div>

      { props.currentQ > 0 ? <button type="button" className="btn btn-default extraMarginTop floatLeft" onClick={ props.prevQ }>Prev</button> 
          : null }
      { props.currentQ < props.questions.length - 1 ? <button type="button" className="btn btn-default extraMarginTop floatRight" onClick={ props.nextQ }>Next</button>
          : null }
      { props.currentQ === props.questions.length - 1 ? <button type="button" className="btn btn-primary extraMarginTop floatRight" onClick={ props.submitAnswer }>Submit</button>
          : null }

    </div>
  )

}

export default QuestionView;