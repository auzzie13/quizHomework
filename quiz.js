//Element variables
var startButton = document.getElementById("startBtn");
var nextButton = document.getElementById("nextBtn");
var restartButton = document.getElementById("restartBtn");
var submitButton = document.getElementById("submitBtn");
var questionContainerEl = document.getElementById("questionContainer");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answerBtns");
var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
var endGameEl = document.getElementById("endGameContainer");
var highScoreEl = document.getElementById("highScore");
var finalScoreEl = document.getElementById("finalScore");
var nameEl = document.querySelector(".input");
var localStorageScore = document.getElementById("bestScore");
var localStorageName = document.getElementById("username");

//establish global variables
var questionTime = 10;
var count = 0;
var secondsLeft = 10;
var score = 0;
var i = 0;
var clock;
var highScore = {
  name: "",
  userScore: 0,
};

//event listeners
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartGame);

//function to handle start game button
function startGame() {
  timer();
  toggleControls();
  generateQuestion();
  var localStorageObject = JSON.parse(localStorage.getItem("highScore"));
  localStorageScore.textContent = localStorageObject.userScore;
  localStorageName.textContent = localStorageObject.name;
}

//function to handle next question button
function nextQuestion() {
  timerEl.textContent = secondsLeft;
  timer();

  if (i === 10) {
    gameOver();
  } else {
    generateQuestion();
  }
}

//function to restart quiz
function restartGame() {
  window.location.reload();
}

//function to toggle display boxes
function toggleControls() {
  questionContainerEl.classList.remove("hide");
  nextButton.classList.remove("hide");
  timerEl.classList.remove("hide");
  startButton.classList.add("hide");
}

//function to display questions
function generateQuestion() {
  if (i === 0) {
    while (answerButtonsEl.firstChild) {
      answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
    questionEl.textContent = questions[i].question;
    questionEl.setAttribute("value", false);
    questions[i].answers.forEach((answer) => {
      var button = document.createElement("button");
      button.textContent = answer.text;
      button.classList = "btn";
      button.setAttribute("value", answer.correct);
      button.addEventListener("click", grader);
      answerButtonsEl.append(button);
    });
  } else {
    while (answerButtonsEl.firstChild) {
      answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
    questionEl.textContent = questions[i].question;
    questionEl.setAttribute("value", false);
    questions[i].answers.forEach((answer) => {
      var button = document.createElement("button");
      button.textContent = answer.text;
      button.classList = "btn";
      button.setAttribute("value", answer.correct);
      button.addEventListener("click", grader);
      answerButtonsEl.append(button);
    });
  }
}

//timer interval
function timer() {
  clock = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(clock);
      timerEl.textContent = secondsLeft;
      showAnswers();
    }
  }, 1000);
}

//function to grade answer to a question
function grader(e) {
  clearInterval(clock);
  showAnswers();
  var answered = questionEl.attributes.value;
  i++;
  var answer = e.target.value;
  if (answer === "true" && answered.value === "false") {
    score += parseInt(secondsLeft);
    scoreEl.textContent = score;
    questionEl.setAttribute("value", true);
    secondsLeft = 10;
  }
  questionEl.setAttribute("value", true);
  secondsLeft = 10;
}

//function to change answer button colors to show right/wrong answers
function showAnswers() {
  for (var j = 0; j <= 3; j++) {
    var answerButton = answerButtonsEl.children[j];
    if (answerButton.value === "true") {
      answerButton.classList.add("correct");
    } else {
      answerButton.classList.add("wrong");
    }
  }
}

//End game function-saves high score to local storage
function gameOver() {
  var recordScore = JSON.parse(localStorage.getItem("highScore"));
  console.log(recordScore.userScore);
  console.log(score);
  if (score > recordScore.userScore) {
    questionContainerEl.classList.add("hide");
    nextButton.classList.add("hide");
    timerEl.classList.add("hide");
    highScoreEl.classList.remove("hide");
    endGameEl.classList.remove("hide");
    finalScoreEl.textContent = score;
  } else {
    questionContainerEl.classList.add("hide");
    nextButton.classList.add("hide");
    timerEl.classList.add("hide");
    endGameEl.classList.remove("hide");
    finalScoreEl.textContent = score;
    restartButton.classList.remove("hide");
  }

submitButton.addEventListener("click", function() {
  highScore.name = nameEl.value;
  highScore.userScore = score;
  localStorage.setItem("highScore", JSON.stringify(highScore));
  restartButton.classList.remove("hide");
  highScoreEl.classList.add("hide");
})

}

//Questions Array
var questions = [
  {
    question: "What Does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Huge Text Makeup Language", correct: false },
      { text: "Hyper Trophic Myopathy Language", correct: false },
      { text: "No Idea!", correct: false },
    ],
  },
  {
    question: "What is CSS?",
    answers: [
      { text: "Cascading Super Sheets", correct: false },
      { text: "Cascading Silly Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Sorting Sheets", correct: false },
    ],
  },
  {
    question: "What is the console.log function?",
    answers: [
      { text: "Alerts user of a given message", correct: false },
      { text: "Writes a message to the console.", correct: true },
      {
        text: "Process of consoling a log before throwing it in a fire.",
        correct: false,
      },
      { text: "Prompts a true or false question.", correct: false },
    ],
  },
  {
    question: "Which terminal command creates a new directory?",
    answers: [
      { text: "touch", correct: false },
      { text: "mkdir", correct: true },
      { text: "pwd", correct: false },
      { text: "cd", correct: false },
    ],
  },
  {
    question: "Which terminal command creates a new file?",
    answers: [
      { text: "mv", correct: false },
      { text: "mkdir", correct: false },
      { text: "touch", correct: true },
      { text: "ls", correct: false },
    ],
  },
  {
    question: "How do you start javascript code?",
    answers: [
      { text: "With a link tag.", correct: false },
      { text: "With a div tag", correct: false },
      { text: "With a style tag.", correct: false },
      { text: "With a script tag.", correct: true },
    ],
  },
  {
    question: "A gutter is a?",
    answers: [
      { text: "No Idea!", correct: false },
      { text: "Space between two rows.", correct: false },
      { text: "The space around your padding.", correct: false },
      { text: "Space between two columns.", correct: true },
    ],
  },
  {
    question: "What is a CDN?",
    answers: [
      { text: "Contact Delivery Netork", correct: true },
      { text: "Contact Driving Network", correct: false },
      { text: "Contact Delivery Node", correct: false },
      { text: "Contact Driving Node", correct: false },
    ],
  },
  {
    question: "What is JQuery?",
    answers: [
      {
        text:
          "JavaScript library for building web applications using Web Components",
        correct: false,
      },
      {
        text:
          "JavaScript library designed to simplify HTML DOM tree traversal and manipulation",
        correct: true,
      },
      {
        text:
          "JavaScript library designed to ease the rapid development of cross-platform, JavaScript/Ajax-based applications and web sites",
        correct: false,
      },
      { text: "JavaScript library for data visualization", correct: false },
    ],
  },
  {
    question: "In css, how do you reference an 'ID' from your HTML?",
    answers: [
      { text: "&", correct: false },
      { text: "#", correct: true },
      { text: "*", correct: false },
      { text: "@", correct: false },
    ],
  },
];
