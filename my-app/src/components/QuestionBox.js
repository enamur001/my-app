import React, {useState} from "react"; 
import "../style.css"; 

// Function to question inside our app 
const QuestionBox = ({ question, options, selected}) => { 
const [answer, setAnswer] = useState(options); 
return ( 
	<div className="questionBox"> 
		<div className="question">{question}</div> 
        <select name="cars" id="cars" onChange={(event)=>{ 
                    setAnswer(); 
					selected(event.target.value); 
				}}>
        <option value="default" selected disabled> 
          Select an Option 
        </option> 
		{answer && answer.map((text, index) => ( 
		<option 
			key={index} 
            className="answerBtn"
            value={text}
			> {text} 
		</option> 
		))}
        </select> 
	</div> 
) 
}; 

export default QuestionBox; 
