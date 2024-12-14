const quizData = [
  {
    question: "What does the <meta> tag in HTML do?",
    options: [
      "Adds interactivity to the page",
      "Specifies metadata about the document",
      "Creates a navigation menu",
      "Embeds multimedia content",
    ],
    answer: 1,
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["font-style", "text-align", "color", "bg-color"],
    answer: 3,
  },
  {
    question: "What is the purpose of the id attribute in HTML?",
    options: [
      "To define an HTML element as a hyperlink",
      "To uniquely identify an element for styling or scripting",
      "To set the alignment of the text",
      "To specify the type of input field",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is true about JavaScript?",
    options: [
      "JavaScript is a server-side programming language only",
      "JavaScript cannot interact with HTML and CSS",
      "JavaScript is used to make web pages interactive",
      "JavaScript does not support object-oriented programming",
    ],
    answer: 2,
  },
  {
    question:
      "Which of the following is NOT a valid value for the position property in CSS?",
    options: [
      "relative", 
      "absolute", 
      "infinite", 
      "fixed"
    ],
    answer: 2,
  },
  {
    question:
      "What does the a tag in HTML define?",
    options: [
      "An image", 
      "A Paragraph", 
      "A heading", 
      "A hyperlink"
    ],
    answer: 3,
  },
  {
    question:
      "Which method is used to find the length of a string in JavaScript?",
    options: [
      "length()",
      "size()", 
      "getLength()", 
      "getSize()"
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is the correct syntax to write a function in JavaScript?",
    options: [
      "function = myFunction()", 
      "function: myFunction()", 
      "function myFunction()", 
      "myFunction(): function"],
    answer: 2,
  },
  {
    question:
      "Which attribute is used to uniquely identify an HTML element?",
    options: [
      "class", 
      "id", 
      "style", 
      "name"
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is the correct way to write an if statement in JavaScript?",
    options: [
      "if x = 5 then", 
      "if (x == 5)", 
      "if x = 5", 
      "if x = 5"
    ],
    answer: 1,
  },
];

const answerElm = document.querySelectorAll(".answer");
const questionElm = document.querySelector(".question");
const opt1 = document.querySelector(".option_1");
const opt2 = document.querySelector(".option_2");
const opt3 = document.querySelector(".option_3");
const opt4 = document.querySelector(".option_4");
const btn = document.getElementById("submit");
const welcome = document.querySelector('.welcome')
const startBtn = document.getElementById('start-game')
const quiz = document.querySelector(".quiz");
const detailBtn = document.getElementById('quiz-detail')
const details = document.querySelector('.details')


// console.log(answerElm);

let currentQuiz = 0;
let score = 0;

detailBtn.addEventListener('click', () => {
  // startBtn.style.display = "block"
  welcome.style.display = "none"
  detailBtn.style.display = "none"
  details.innerHTML = `<div class="w-auto flex text-center justify-center items-center flex-col space-y-3 shadow-slate-500 bg-white p-5 rounded-xl">
                        <h1 class="font-bold text-xl md:text-2xl">Quiz Topic: HTML, CSS, JavaScript</h1>
                        <p class="font-medium text-xl md:text-2xl text-gray-600">Total No of Question: 10</p>
                        <p class="font-medium text-xl md:text-2xl text-gray-600">Full Marks: 10</p>
                        <button id="start-game" class="bg-gray-700 mx-4 transition duration-300 hover:bg-green-500 text-white hover:text-white px-5 md:px-10 py-4 font-bold shadow-lg rounded-lg">START QUIZ</button>
                      </div>
                      `
})

//Instead of directly attaching an event listener to the button, we add the listener to the document or a parent container.
//Using e.target.id === 'start-game', we check if the clicked element is the dynamically added start-game button
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'start-game') {
    details.style.display = "none";
    welcome.style.display = "none";
    quiz.style.display = "block";
    loadQuiz();
  }
});


//------LOAD QUIZ----step1
loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  // console.log(options);
  questionElm.innerHTML = `${currentQuiz+1}: ${question}`;
  opt1.innerHTML = options[0];
  opt2.innerHTML = options[1];
  opt3.innerHTML = options[2];
  opt4.innerHTML = options[3];
};


//---get th id of selected option----step3
getSeletedOption = () => {
  let option_id;
  answerElm.forEach((elem, index) => {
    if (elem.checked) {
      option_id = index; // Get the ID of the selected radio button
    }
  });
  return option_id;
};

//----step4----
deselectOption = () => {
  answerElm.forEach((currElem) => {
    currElem.checked = false;
  });
};

//----step2----
btn.addEventListener("click", () => {
  // e.preventDefault()
  const selectedAnswer = getSeletedOption();
//   console.log(selectedAnswer);
  //--check the answer is correct or not----
  if (selectedAnswer === quizData[currentQuiz].answer) {
    score += 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectOption();
    loadQuiz();
  } else {
    quiz.innerHTML = `
            <h1 class="text-2xl md:text-4xl font-bold text-center text-blue-950 mb-4">
              🎉🎉🎉 Congratulations 🎉🎉🎉
            </h1>
            <p class="text-xl text-center mb-6">
                Your score is <span class="font-bold text-blue-500">${score}/${quizData.length}</span>
            </p>
            <button class="text-center reolad-button mx-24 md:mx-[250px] p-2 px-3 bg-slate-700 hover:bg-slate-800  text-white rounded-lg" onclick="location.reload()">Play Again 🔄</button>`;
  }
});
