import React from 'react';
import QAView from './QAView';

const TeacherView = (props) => {

    return(
      <div>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Question Type
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#" onClick={ props.setToTF }>T/F</a></li>
            <li><a href="#" onClick={ props.setToSA }>Short Answer</a></li>
          </ul>
        </div>

        <div>
          <h5>Question: </h5>
          <input type="text" value={ props.tempQ } onChange={ props.setQuestion }></input>

          <h5>Answer: </h5>
          { props.trueFalse ? 
              <div>
                <select id="tf">
                  <option>True</option>
                  <option>False</option>
                </select>
              </div>
            :
             <input type="text" value={ props.tempA } onChange={ props.setAnswer }></input>
          }
        </div>

        <button type="button" className="btn btn-default extraMarginTop" onClick={ props.submit }>Submit</button>

        <div id="questionList">

          { props.questions.map((question, i) => 
              <QAView props={question} key={i} />
            )
          }

        </div>

      </div>
    )
}

export default TeacherView;