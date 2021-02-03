import React, {Component} from "react"; 
import ReactDOM from "react-dom"; 
import "./style.css"; 
import questionAPI from './question'; 
import QuestionBox from './components/QuestionBox'; 
import Result from './components/ResultBox'; 
import 'bootstrap/dist/css/bootstrap.css';

class Quiz extends Component { 
constructor() { 
	super(); 
	this.state = { 
	questionBank: [], 
	score: 0, 
    responses: 0,
    flag: false,
    result: 0 
	}; 
} 

// Function to get question from ./question 
checkScore = () => {
    this.state.responses === 6 ? this.setState({flag: true}): alert("Please answer all the questions");    
};
// Function to get question from ./question 
getQuestions = () => { 
	questionAPI().then(question => { 
	this.setState({questionBank: question}); 
	}); 
}; 

// Set state back to default and call function 
playAgain = () => { 
	this.getQuestions(); 
	this.setState({score: 0, responses: 0, flag: false}); 
};

// Function to compute scores 
computeAnswer = (answer, correctAns) => { 
	if (answer === correctAns) { 
	this.setState({ 
		score: this.state.score + 1 
	}); 
	} 
	this.setState({ 
	responses: this.state.responses < 6 
		? this.state.responses + 1 
		: 5 
    });
}; 

// componentDidMount function to get question 
componentDidMount() { 
	this.getQuestions(); 
} 

render() { 
    
	return (<div className="container"> 
	<div className="title"> 
		QuizOn 
	</div> 

	{this.state.questionBank.length > 0 && 
	this.state.responses < 6 && 
	this.state.questionBank.map(({question, answers, 
	correct, questionId}) => <QuestionBox question= 
	{question} options={answers} key={questionId} 
	selected={answer => this.computeAnswer(answer, correct)}/>)} 
    { 
		 this.state.responses === 6 && this.state.flag 
		? (<Result score={this.state.score} 
			playAgain={this.playAgain}/>) 
		: null
	}
    <div>
        <input type="button" value="Submit" onClick={this.checkScore}/>
    { 
		!this.state.flag && <input type="button" value="reset" onClick={() =>{window.location.reload();}}/>
	}
    </div>
	</div>) 
} 
} 

ReactDOM.render(<Quiz/>, document.getElementById("root")); 
