// import quizData from "./obj.js";
import newQuizData from "./newobj.js";

let userChooseCategory = null;
let howMany;

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

  for (let i = arrCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }

  // console.log("shuffled : ", arrCopy);

  const currentQ = arrCopy.slice(0, num);

  console.log(currentQ);

  const q = currentQ[0];
  console.log(q);
  questionTag.textContent = q.quest;
}
