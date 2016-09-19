import React from 'react'


//Question/Answer view
const QAView = (props) => {
  return(
    <div className="prompt">
      <h2>Question: { props.props.Q }</h2>
      <h2>Answer: { props.props.A }</h2>
    </div>
  )
}

export default QAView;