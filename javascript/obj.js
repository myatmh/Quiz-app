const quizData = [
  {
    programming: [
      {
        question: "What does HTML stand for?",
        answers: [
          "HyperText Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Transfer Machine Language",
        ],
        correct: "HyperText Markup Language",
      },
      {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "CSS", "Python", "Java"],
        correct: "CSS",
      },
      {
        question: "Inside which HTML element do we put JavaScript?",
        answers: ["<script>", "<js>", "<scripting>", "<javascript>"],
        correct: "<script>",
      },
      {
        question:
          "What is the correct syntax for referring to an external script?",
        answers: [
          "<script src='script.js'>",
          "<script href='script.js'>",
          "<script ref='script.js'>",
          "<script name='script.js'>",
        ],
        correct: "<script src='script.js'>",
      },
      {
        question: "Which company developed JavaScript?",
        answers: ["Microsoft", "Netscape", "Sun Microsystems", "IBM"],
        correct: "Netscape",
      },
      // ➕ Add 10 more to reach 15
    ],
  },
  {
    psychology: [
      {
        question: "What is cognitive dissonance?",
        answers: [
          "A brain disorder",
          "The mental discomfort from holding conflicting beliefs",
          "A type of memory loss",
          "A dream state",
        ],
        correct: "The mental discomfort from holding conflicting beliefs",
      },
      {
        question: "Who is the founder of psychoanalysis?",
        answers: ["Sigmund Freud", "Carl Jung", "B.F. Skinner", "Jean Piaget"],
        correct: "Sigmund Freud",
      },
      {
        question: "Which part of the brain is responsible for memory?",
        answers: ["Cerebellum", "Amygdala", "Hippocampus", "Thalamus"],
        correct: "Hippocampus",
      },
      {
        question: "What is the main focus of behaviorism?",
        answers: [
          "Conscious thoughts",
          "Unconscious drives",
          "Observable behavior",
          "Emotional response",
        ],
        correct: "Observable behavior",
      },
      {
        question: "Maslow’s hierarchy of needs ends with?",
        answers: [
          "Self-esteem",
          "Love and belonging",
          "Self-actualization",
          "Safety needs",
        ],
        correct: "Self-actualization",
      },
      // ➕ Add 10 more to reach 15
    ],
  },
];
export default quizData;
