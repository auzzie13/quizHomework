//Variables
var startBtnEl = document.getElementById("startBtn");
var nextBtnEl = document.getElementById("nextBtn");
var questionContainerEl = document.getElementById("questionContainer");
var questionEl = document.getElementById("question");
var answerBtnsEl = document.getElementById("answerBtns");
var randomQuestion;
var currentQuestionIndex;

//Commands
startBtnEl.addEventListener('click', startGame);


//Functions
function startGame () {
    startBtnEl.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    generateRandomQuestion();
}

function generateRandomQuestion() {
    
};






//Questions
var questions = [
    {
        question: "What Does HTML stand for?",
        answers: [
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Huge Text Makeup Language", correct: false},
            {text: "Hyper Trophic Myopathy Language", correct: false},
            {text: "No Idea!", correct: false}
        ]
    },
    {
        question: "What is CSS?",
        answers: [
            {text: "Cascading Super Sheets", correct: false},
            {text: "Cascading Silly Sheets", correct: false},
            {text: "Cascading Style Sheets", correct: true},
            {text: "Cascading Sorting Sheets", correct: false}
        ]
    },
    {
        question: "What is the console.log function?",
        answers: [
            {text: "Alerts user of a given message", correct: false},
            {text: "Writes a message to the console.", correct: true},
            {text: "Process of consoling a log before throwing it in a fire.", correct: false},
            {text: "Prompts a true or false question.", correct: false}
        ]
    },
    {
        question: "Which terminal command creates a new directory?",
        answers: [
            {text: "touch", correct: false},
            {text: "mkdir", correct: true},
            {text: "pwd", correct: false},
            {text: "cd", correct: false}
        ]
    },
    {
        question: "Which terminal command creates a new file?",
        answers: [
            {text: "mv", correct: false},
            {text: "mkdir", correct: false},
            {text: "touch", correct: true},
            {text: "ls", correct: false}
        ]
    },
    {
        question: "How do you initiate javascript code?",
        answers: [
            {text: "With a link tag.", correct: false},
            {text: "With a div tag", correct: false},
            {text: "With a style tag.", correct: false},
            {text: "With a script tag.", correct: true}
        ]
    },
    {
        question: "A gutter is a?",
        answers: [
            {text: "No Idea!", correct: false},
            {text: "Space between two rows.", correct: false},
            {text: "The space around your padding.", correct: false},
            {text: "Space between two columns.", correct: true}
        ]
    },
    {
        question: "What is a CDN?",
        answers: [
            {text: "Contact Delivery Netork", correct: true},
            {text: "Contact Driving Network", correct: false},
            {text: "Contact Delivery Node", correct: false},
            {text: "Contact Driving Node", correct: false}
        ]
    },
    {
        question: "True or False:  Columns hold rows.",
        answers: [
            {text: "True", correct: false},
            {text: "False", correct: true}
        ]
    },
    {
        question: "In css, how do you reference an 'ID' from your HTML?",
        answers: [
            {text: "&", correct: false},
            {text: "#", correct: true},
            {text: "*", correct: false},
            {text: "@", correct: false}
        ]
    }
]