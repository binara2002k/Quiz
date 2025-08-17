const quizData = [
  {
    question: "Which language is used for web apps?",
    a: "Python",
    b: "JavaScript",
    c: "C++",
    d: "Java",
    correct: "b"
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Creative Style System",
    c: "Computer Style Syntax",
    d: "Colorful Style Sheets",
    correct: "a"
  },
  {
    question: "What is the capital of Sri Lanka?",
    a: "Colombo",
    b: "Galle",
    c: "Kandy",
    d: "Jaffna",
    correct: "a"
  },
  {
    question: "Which company developed Java?",
    a: "Google",
    b: "Sun Microsystems",
    c: "Microsoft",
    d: "Oracle",
    correct: "b"
  },
  {
    question: "HTML is used for?",
    a: "Styling",
    b: "Structuring Web Pages",
    c: "Database Management",
    d: "Networking",
    correct: "b"
  },
  {
    question: "Which symbol is used for IDs in CSS?",
    a: "#",
    b: ".",
    c: "*",
    d: "@",
    correct: "a"
  },
  {
    question: "JavaScript is a ___ language?",
    a: "Programming",
    b: "Markup",
    c: "Database",
    d: "Styling",
    correct: "a"
  },
  {
    question: "Figma is mainly used for?",
    a: "Coding",
    b: "Design & Prototyping",
    c: "Database",
    d: "SEO",
    correct: "b"
  },
  {
    question: "Which of these is NOT a programming language?",
    a: "Python",
    b: "Ruby",
    c: "HTML",
    d: "C++",
    correct: "c"
  },
  {
    question: "What does JS stand for?",
    a: "JavaSystem",
    b: "JavaScript",
    c: "JustScript",
    d: "JumboScript",
    correct: "b"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const skipBtn = document.getElementById("skip-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns[0].textContent = q.a;
  answerBtns[1].textContent = q.b;
  answerBtns[2].textContent = q.c;
  answerBtns[3].textContent = q.d;
}

answerBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.id === quizData[currentQuestion].correct) {
      score++;
    }
    nextQuestion();
  });
});

skipBtn.addEventListener("click", () => {
  nextQuestion();
});

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.textContent = `You scored ${score} / ${quizData.length}`;
}

loadQuestion();
