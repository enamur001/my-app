const qBank = [ 
    { 
        question: 
        "Who is the only player to have scored 100 international centuries ?", 
        answers: ["Sachin", "Akram", "Virat", "Kartik"], 
        correct: "Sachin", 
        questionId: "1"
    }, 
    { 
        question: 
        "What is the number of centuries scored by Sachin Tendulkar in Test Cricket ?", 
        answers: ["30", "20", "50", "60"],  
        correct: "30", 
        questionId: "2"
    }, 
    { 
        question: 
        "What is the number of centuries scored by Sachin Tendulkar in ODI Cricket", 
        answers: ["30", "20", "50", "60"],  
        correct: "50", 
        questionId: "3"
    }, 
    { 
        question: 
        "Who is the highest scorer in international cricket?", 
        answers: ["Donal Bradman", "Stven Gibbs", "Sachin Tendulkar", "Anil Kumbley"], 
        correct: "Donal Bradman", 
        questionId: "4"
    }, 
    { 
        question: 
        "Who is the only player scored 100 centuries ?", 
        answers: ["Donal Bradman", "Jacques Kallis", "Sachin Tendulkar", "Anil Kumbley"], 
        correct: "Jacques Kallis", 
        questionId: "5"
    }, 
    { 
        question: 
        "Which year Sachin Tendulkar was confered the prestigious bharat ratna award ?", 
        answers: ["1999", "1998", "2000", "2001"], 
        correct: "1999", 
        questionId: "6"
    }, 
    ]; 
    
    export default (n = 6) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
    