// import quizData from "./obj.js";
import newQuizData from "./newobj.js";

let userChooseCategory = null;
let howMany = null;
let currentQuestion = null;

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

//Change HTML category button NodeList to real Array
const categoryChoiceBtn = new Array(
  ...document.querySelectorAll(".category_btn")
);
// console.log(categoryChoiceBtn);

//Check which category user choosed

categoryChoiceBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.textContent);

    const categoryText = e.target.textContent.toLowerCase();
    // console.log(categoryText);
    userChooseCategory = newQuizData.find(
      (cat) => cat.category === categoryText
    );

    // ui change for selected
    if (userChooseCategory) {
      categoryChoiceBtn.forEach((b) => {
        b.style.backgroundColor = "hsla(180, 100%, 89%, 0.7)";
        b.style.border = "1px solid hsl(240, 45%, 55%)";
      });
      e.target.style.backgroundColor = "hsl(231, 77%, 76%)";
    }
  });
});

const numberOfQuestions = new Array(
  ...document.querySelectorAll(".numbers_of_questions")
);

numberOfQuestions.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (!userChooseCategory) {
      alert("Please select a category first !");
      num.style.border = "1px solid #fa003f";
    } else {
      numberOfQuestions.forEach((n) => {
        n.style.border = "1px solid hsl(240, 45%, 55%)";
        n.style.backgroundColor = "hsla(180, 100%, 89%, 0.7)";
      });
      num.style.backgroundColor = "hsl(231, 77%, 76%)";

      // change numbers of question
      howMany = parseInt(e.target.textContent);
    }
  });
});

const startBtn = document.querySelector(".start_btn");

const initialQuizContainer = document.querySelector(".Initial_quiz_container");
const questionContainer = document.querySelector(".question_container");

const questionTag = document.querySelector(".question");

const nextBtn = document.querySelector(".next_btn");

startBtn.addEventListener("click", () => {
  console.log(userChooseCategory);
  console.log(howMany);

  if (!userChooseCategory || !howMany) {
    alert("select category and numbers of questions first !");
    return;
  }

  initialQuizContainer.style.display = "none";
  questionContainer.style.display = "flex";

  quizStart(userChooseCategory, howMany);
});

function quizStart(cat, num) {
  const arrCopy = [...cat.questions];

  // Fisher Yate
  for (let i = arrCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }

  // console.log("shuffled : ", arrCopy);

  selectedQuestions = arrCopy.slice(0, num);
  currentQuestionIndex = 0;
  score = 0;
  console.log(selectedQuestions);

  renderQuestion();
}

const renderQuestion = () => {
  currentQuestion = selectedQuestions[currentQuestionIndex];
  questionTag.textContent = currentQuestion.quest;

  const answersBtnContainer = document.querySelector(".answers_btn_container");
  answersBtnContainer.innerHTML = "";
  currentQuestion.answers.forEach((ques, index) => {
    const answerBtn = document.createElement("button");
    const spanTag = document.createElement("span");
    const textNode = document.createTextNode(ques);

    answerBtn.classList.add("answer_btn");
    answerBtn.setAttribute("data-answer", ques); // store dataset in html

    spanTag.textContent = index + 1;
    answerBtn.append(spanTag, textNode);
    answersBtnContainer.appendChild(answerBtn);

    const trackQuestion = document.querySelector(".track_question");
    trackQuestion.innerHTML = `Questions - <span>${
      currentQuestionIndex + 1
    }</span> / <span>${howMany}</span>`;

    nextBtn.disabled = true;

    answerBtn.addEventListener("click", () => {
      // const selectedAnswer = answerBtn.getAttribute("data-answer");// use later if need
      const correctAnswer = currentQuestion.correct;

      const allButtons = document.querySelectorAll(".answer_btn");

      allButtons.forEach((btn) => {
        const answer = btn.getAttribute("data-answer");

        if (answer === correctAnswer) {
          btn.style.backgroundColor = "#62d6b9ff";
        } else {
          btn.style.backgroundColor = "#f7587fff";
        }

        btn.classList.add("disabled_btn");
      });

      if (answerBtn.getAttribute("data-answer") === correctAnswer) {
        score++;
      }

      nextBtn.disabled = false;
    });
  });
};

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < selectedQuestions.length) {
    renderQuestion();
    nextBtn.disabled = true;
  } else {
    showFinalScore();
  }
});

const finalScoreContainer = document.querySelector(".congrat_container");
const scorePoint = document.querySelector(".score_point");

const showFinalScore = () => {
  // console.log("score is : ", score);
  questionContainer.style.display = "none";
  finalScoreContainer.style.display = "flex";
  scorePoint.innerHTML = `
          Your Score is :
          <span style="font-size: 24px; color: hsl(0, 100%, 47%)">${score}</span>&nbsp;&nbsp; for
          <span style="font-size: 16px; color: #002e69ff">${selectedQuestions.length}</span> questions
  `;
};

const restartBtn = document.querySelector(".restart_btn");

restartBtn.addEventListener("click", () => {
  finalScoreContainer.style.display = "none";
  initialQuizContainer.style.display = "flex";
  selectedQuestions = [];
  categoryChoiceBtn.forEach((b) => {
    b.style.backgroundColor = "hsla(180, 100%, 89%, 0.7)";
    b.style.border = "1px solid hsl(240, 45%, 55%)";
  });
  numberOfQuestions.forEach((n) => {
    n.style.border = "1px solid hsl(240, 45%, 55%)";
    n.style.backgroundColor = "hsla(180, 100%, 89%, 0.7)";
  });
  userChooseCategory = null;
  howMany = null;
  console.log(selectedQuestions);
  console.log(userChooseCategory);
  console.log(howMany);
});
