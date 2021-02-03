import React from 'react'; 
import "../style.css"; 

const Result = ({score, playAgain}) => ( 
<div className="score-board"> 
	<div className="score"> Your score is {score} / 6 correct answer ! ! ! </div> 
	<button className="playBtn" onClick={playAgain} > Redo </button> 
</div> 
) 

export default Result; 
