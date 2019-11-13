var startButton = document.getElementById("startBtn");
var nextButton = document.getElementById("nextBtn");
var questionContainerEl = document.getElementById("questionContainer");
var randomQuestion;
var currentQuestion;
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answerBtns");
//var timerEl = document.getElementById("timer");
//var questionTime = 5;
//var gaugeWidth = 150;
//var count = 0;
//var gaugeProgressUnit = gaugeWidth/questionTime;
//var score = 0;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
})

function startGame() {
    //console.log('Started');
    startButton.classList.add('hide');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainerEl.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestion[currentQuestion]);
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
           // console.log(score++);
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    };
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (randomQuestion.length > currentQuestion + 1) {
    nextButton.classList.remove('hide');
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//function counterRender() {
//    if (count <= questionTime) {
//        timerEl.innerHTML = count;
//        timeGauge.style.width = gaugeProgressUnit * count + "px";
//        count++;
//    } else {
//        count = 0;
//    }
//}

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
        question: "How do you start javascript code?",
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
