import React from 'react';

const Score = (props) => {
  return(
      <h3>Your score is: {props.score} / {props.questions.length}</h3>
  )
}

export default Score;