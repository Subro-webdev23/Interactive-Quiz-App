const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "7"],
        answer: "8"
    }
];


const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const feedbackElement = document.querySelector(".feedback");
const scoreElement = document.querySelector(".score");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

let currentQuestionIndex = 0;

function loadQuestion(){

        // Clear previous options and feedback
        optionsElement.innerHTML = "";
        feedbackElement.textContent = "";

    currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.options.forEach((option) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.textContent = option;

        optionsElement.appendChild(li);
        li.appendChild(button);

        button.addEventListener('click', () => {
            
            if(option === currentQuestion.answer) {
                feedbackElement.textContent = 'Currect Answer';
                feedbackElement.style.color = 'green';
            }else{
                feedbackElement.innerHTML = `Wrong ! <span style="color: green;">Correct Answer: ${currentQuestion.answer}</span>`;
                feedbackElement.style.color = 'red';
            }
        })
    });
}
// // Previous button visibility 
// if (currentQuestionIndex === 0) {
//     previousButton.style.display = 'none';
// }else{
//     previousButton.style.display = 'inline-block';
// }
// // Next button visibility 
// if (currentQuestionIndex === quizData.length - 1) {
//     nextButton.style.display = 'inline-block';
// }else{
//     nextButton.style.display = 'none';
// }

// Event listener for Next button
nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < quizData.length - 1){
    currentQuestionIndex++;
    loadQuestion();
    }
})

// Event listener for Previous button
previousButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
})

loadQuestion();





























/*
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    // Clear previous feedback and options
    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";

    // Load current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Load options
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(option));
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
}

function handleAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "Wrong! The correct answer was: " + currentQuestion.answer;
        feedbackElement.style.color = "red";
    }

    // Load next question or show final score after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }, 1000);
}

function showFinalScore() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
    scoreElement.textContent = `Your score: ${score} / ${quizData.length}`;
}

// Initialize quiz
loadQuestion();
*/ 
