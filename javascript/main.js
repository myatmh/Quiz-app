// import quizData from "./obj.js";
import newQuizData from "./newobj.js";

let userChooseCategory = null;

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
    console.log(userChooseCategory);
    if (userChooseCategory) {
      categoryChoiceBtn.forEach((b) => {
        b.style.backgroundColor = "hsla(180, 100%, 89%, 0.7)";
        b.style.border = "1px solid hsl(240, 45%, 55%)";
      });
      e.target.style.backgroundColor = "hsl(231, 77%, 76%)";
    }

    // ui change for selected
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
    }

    const howMany = parseInt(e.target.textContent);
  });
});
