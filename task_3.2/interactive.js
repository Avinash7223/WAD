// Quiz questions and answers
const quizData = [
    {
        question: "What is the short form of 'Web Application Development'?",
        answer: "WAD"
    },
    {
        question: "How many types of CSS exist?",
        answer: "3"
    },
    {
        question: "What is the tag used to connect HTML and CSS?",
        answer: "<link>"
    },
    {
        question: "Who is the father of the computer?",
        answer: "Charles Babbage"
    }
];

let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = quizData[currentQuestionIndex].question;
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase();
    const correctAnswer = quizData[currentQuestionIndex].answer.toLowerCase();
    const resultElement = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is: " + correctAnswer;
    }

    // Move to the next question or end the quiz
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        // Clear the input and result for the next question
        document.getElementById("answerInput").value = "";
        
    } else {
        resultElement.textContent += " ,Quiz completed!";
    }
}

// Initialize the quiz
document.addEventListener("DOMContentLoaded", function() {
    displayQuestion();
});
