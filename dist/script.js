
  const frontendQuizData = [
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
  
  const javaQuizData = [
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "0"],
      answer: 1,
    },
    {
      question: "Which of the following is a valid Java identifier?",
      options: ["1variable", "_variable", "@variable", "$variable"],
      answer: 1,
    },
    {
      question: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "float", "String", "char"],
      answer: 2,
    },
    {
      question: "Which method is used to start a thread in Java?",
      options: ["run()", "start()", "execute()", "begin()"],
      answer: 1,
    },
    {
      question: "What is the size of a char in Java?",
      options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      answer: 1,
    },
    {
      question: "Which of the following is the correct syntax for creating an array in Java?",
      options: [
        "int[] arr = new int[5];",
        "int arr[] = new int[5];",
        "int arr[] = {1, 2, 3, 4, 5};",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question: "What does the 'super' keyword do in Java?",
      options: [
        "Calls the parent class constructor",
        "Accesses private members of the current class",
        "Defines a new variable",
        "Instantiates an object",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is used to handle exceptions in Java?",
      options: ["try-catch", "throw-catch", "catch-throw", "error-catch"],
      answer: 0,
    },
    {
      question: "Which of the following is the base class of all exceptions in Java?",
      options: ["Throwable", "Exception", "Error", "RuntimeException"],
      answer: 0,
    },
    {
      question: "Which of the following is NOT a valid access modifier in Java?",
      options: ["private", "protected", "public", "global"],
      answer: 3,
    }
  ];
  
  const pythonQuizData = [
    {
      question: "What is the default value of a variable in Python?",
      options: ["None", "0", "null", "undefined"],
      answer: 0,
    },
    {
      question: "Which of the following is a valid Python data type?",
      options: ["int", "str", "list", "All of the above"],
      answer: 3,
    },
    {
      question: "Which function is used to get the length of a list in Python?",
      options: ["len()", "length()", "size()", "getSize()"],
      answer: 0,
    },
    {
      question: "How do you start a comment in Python?",
      options: ["//", "#", "/*", "<!--"],
      answer: 1,
    },
    {
      question: "What is the result of the following Python expression: 3 + 2 * 5?",
      options: ["25", "13", "16", "10"],
      answer: 1,
    },
    {
      question: "Which of the following is used to define a function in Python?",
      options: ["function", "def", "method", "func"],
      answer: 1,
    },
    {
      question: "Which of the following is the correct syntax to create a list in Python?",
      options: [
        "[1, 2, 3]",
        "(1, 2, 3)",
        "{1, 2, 3}",
        "[1; 2; 3]",
      ],
      answer: 0,
    },
    {
      question: "How do you create a dictionary in Python?",
      options: [
        "dict = {'key': 'value'}",
        "dict = ('key': 'value')",
        "dict = [key: value]",
        "dict = <key, value>",
      ],
      answer: 0,
    },
    {
      question: "Which of the following keywords is used to define a class in Python?",
      options: ["class", "def", "function", "object"],
      answer: 0,
    },
    {
      question: "Which of the following statements is true about Python?",
      options: [
        "Python is a statically-typed language.",
        "Python supports multiple programming paradigms.",
        "Python is not object-oriented.",
        "Python does not support exception handling.",
      ],
      answer: 1,
    }
  ];
  const dsaQuizData = [
    {
      question: "Which of the following is a linear data structure?",
      options: ["Array", "Stack", "Queue", "All of the above"],
      answer: 3,
    },
    {
      question: "What is the time complexity of searching for an element in an unsorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      answer: 2,
    },
    {
      question: "Which data structure uses LIFO (Last In First Out) order?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: 1,
    },
    {
      question: "Which of the following is NOT a type of linked list?",
      options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Array Linked List"],
      answer: 3,
    },
    {
      question: "Which sorting algorithm has the best time complexity in the average case?",
      options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Selection Sort"],
      answer: 1,
    },
    {
      question: "What is the space complexity of the merge sort algorithm?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: 1,
    },
    {
      question: "Which of the following is used to implement a priority queue?",
      options: ["Array", "Stack", "Binary Heap", "Hash Map"],
      answer: 2,
    },
    {
      question: "Which of the following is a divide-and-conquer algorithm?",
      options: ["Insertion Sort", "Merge Sort", "Selection Sort", "Bubble Sort"],
      answer: 1,
    },
    {
      question: "Which of the following is the correct time complexity of an efficient binary search algorithm?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
      answer: 1,
    },
    {
      question: "Which of the following operations can be performed on a stack data structure?",
      options: ["Push", "Pop", "Peek", "All of the above"],
      answer: 3,
    }
  ];
  const oopsQuizData = [
    {
      question: "What is the main purpose of encapsulation in OOP?",
      options: [
        "To hide the implementation details from the user",
        "To create a relationship between objects",
        "To allow objects to inherit properties",
        "To ensure data is always in a valid state"
      ],
      answer: 0,
    },
    {
      question: "Which of the following is the process of creating a new class based on an existing class?",
      options: [
        "Abstraction",
        "Encapsulation",
        "Inheritance",
        "Polymorphism"
      ],
      answer: 2,
    },
    {
      question: "What is polymorphism in OOP?",
      options: [
        "The ability to store multiple objects of different types in a single variable",
        "The ability of an object to take multiple forms",
        "The process of hiding details from the user",
        "The process of creating a class from another class"
      ],
      answer: 1,
    },
    {
      question: "Which of the following best describes inheritance in OOP?",
      options: [
        "A way to hide the complexity of the system",
        "A way for a class to derive properties and behavior from another class",
        "A way to define a method in the base class that is overridden in the derived class",
        "A way to ensure that data is always in a valid state"
      ],
      answer: 1,
    },
    {
      question: "Which of the following keywords is used to define a class in Java?",
      options: [
        "def",
        "function",
        "class",
        "object"
      ],
      answer: 2,
    },
    {
      question: "Which of the following is NOT an access modifier in OOP?",
      options: [
        "private",
        "protected",
        "public",
        "default"
      ],
      answer: 3,
    },
    {
      question: "Which of the following statements is true about a constructor in OOP?",
      options: [
        "It is used to initialize an object when it is created",
        "It is used to define methods in a class",
        "It is called when an object is destroyed",
        "It can only take parameters"
      ],
      answer: 0,
    },
    {
      question: "What is an abstract class in OOP?",
      options: [
        "A class that can have only abstract methods",
        "A class that cannot be instantiated and is used to define methods that must be implemented by derived classes",
        "A class that contains only static methods",
        "A class that is used for polymorphism"
      ],
      answer: 1,
    },
    {
      question: "Which of the following is a feature of OOP?",
      options: [
        "Encapsulation",
        "Global variables",
        "Multiple inheritance in all languages",
        "Static methods only"
      ],
      answer: 0,
    },
    {
      question: "Which of the following can be a superclass in OOP?",
      options: [
        "Object",
        "Method",
        "Variable",
        "Class"
      ],
      answer: 0,
    }
  ];
  const osQuizData = [
    {
      question: "Which of the following is NOT a function of an operating system?",
      options: [
        "Memory management",
        "Process management",
        "Data processing",
        "File management"
      ],
      answer: 2,
    },
    {
      question: "What is the primary purpose of the kernel in an operating system?",
      options: [
        "To manage hardware resources",
        "To run user applications",
        "To provide security to the system",
        "To handle user input"
      ],
      answer: 0,
    },
    {
      question: "Which of the following is a process management task performed by an operating system?",
      options: [
        "Scheduling processes",
        "Managing disk space",
        "Handling file access",
        "Managing memory pages"
      ],
      answer: 0,
    },
    {
      question: "Which of the following is the correct definition of a process in an operating system?",
      options: [
        "A program in execution",
        "A program stored on disk",
        "A user input request",
        "A system service"
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of virtual memory in an operating system?",
      options: [
        "To extend the amount of available memory beyond physical RAM",
        "To increase the speed of RAM",
        "To manage storage devices",
        "To handle input from users"
      ],
      answer: 0,
    },
    {
      question: "Which of the following is NOT a type of operating system?",
      options: [
        "Batch OS",
        "Real-time OS",
        "Multi-user OS",
        "Superfast OS"
      ],
      answer: 3,
    },
    {
      question: "What is the role of a file system in an operating system?",
      options: [
        "To manage hardware components",
        "To manage user interfaces",
        "To organize and store files on storage devices",
        "To execute user programs"
      ],
      answer: 2,
    },
    {
      question: "Which of the following is an example of a real-time operating system?",
      options: [
        "Windows",
        "Linux",
        "RTOS",
        "Mac OS"
      ],
      answer: 2,
    },
    {
      question: "Which of the following is a primary responsibility of the operating system's scheduler?",
      options: [
        "Allocating resources to processes",
        "Managing the file system",
        "Defragmenting the hard drive",
        "Displaying the user interface"
      ],
      answer: 0,
    },
    {
      question: "Which of the following is a type of system call in an operating system?",
      options: [
        "Process control",
        "File manipulation",
        "Device management",
        "All of the above"
      ],
      answer: 3,
    }
  ]
  // const AllQuizes = [
  //   { quizName: "Frontend", quizData: frontendQuizData },
  //   { quizName: "Java", quizData: javaQuizData },
  //   { quizName: "Python", quizData: pythonQuizData },
  //   { quizName: "DSA", quizData: dsaQuizData },
  //   { quizName: "OOPS", quizData: oopsQuizData },
  //   { quizName: "OS", quizData: osQuizData },
  // ];


const answerElm = document.querySelectorAll(".answer");
const questionElm = document.querySelector(".question");
const opt1 = document.querySelector(".option_1");
const opt2 = document.querySelector(".option_2");
const opt3 = document.querySelector(".option_3");
const opt4 = document.querySelector(".option_4");
const btn = document.getElementById("submit");
const welcome = document.querySelector('.welcome')
const quiz = document.querySelector(".quiz");
const quizSelection = document.querySelector('.quiz-selection')
// const quizCard = document.querySelectorAll('.quiz-card')
const startBtn =document.querySelectorAll('.start-game-Btn')





// console.log(startBtn);

let currentQuiz = 0;
let score = 0;
let quizData = []




startBtn.forEach((b)=>{
  b.addEventListener('click', (e) => {
    quizSelection.style.display = "none";
    welcome.style.display = "none";
    quiz.style.display = "block";
    const selectedQuiz = e.target.id
    console.log(selectedQuiz);
    // const quizData = AllQuizes.find(quiz => quiz.quizName === selectedQuiz).quizData;
    if(selectedQuiz === 'Frontend'){
      quizData = frontendQuizData
    }
    else if(selectedQuiz === 'Python'){
      quizData = pythonQuizData
    }
    else if(selectedQuiz === 'Java'){
      quizData = javaQuizData
    }
    else if(selectedQuiz === 'OS'){
      quizData = osQuizData
    }
    else if(selectedQuiz === 'OOPS'){
      quizData = oopsQuizData
    }
    else if(selectedQuiz === 'DSA'){
      quizData = dsaQuizData
    }
    // console.log(quizData);
    loadQuiz();
  })
})


//------LOAD QUIZ----step1
loadQuiz = () => {
  // const { question, options } = ;
  console.log(quizData);
  
  
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
