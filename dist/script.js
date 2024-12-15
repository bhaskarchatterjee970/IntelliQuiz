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
  
  const quantAptitudeQuizData = [
    {
      question: "A and B together can complete a task in 12 days. A alone can do it in 20 days. How many days will B alone take to complete the task?",
      options: ["30", "25", "20", "15"],
      answer: 0,
    },
    {
      question: "If a sum of money becomes ₹6400 in 2 years at 20% annual compound interest, what was the principal amount?",
      options: ["₹5000", "₹5200", "₹5400", "₹5600"],
      answer: 0,
    },
    {
      question: "A pipe can fill a tank in 6 hours, while another pipe can empty the same tank in 8 hours. If both pipes are opened together, how long will it take to fill the tank?",
      options: ["24 hours", "12 hours", "16 hours", "8 hours"],
      answer: 2,
    },
    {
      question: "The difference between a two-digit number and the number obtained by reversing its digits is 36. What is the sum of the digits?",
      options: ["8", "9", "6", "7"],
      answer: 1,
    },
    {
      question: "A train 180 m long is running at a speed of 72 km/h. How much time will it take to cross a pole?",
      options: ["7.5 seconds", "9 seconds", "12.5 seconds", "15 seconds"],
      answer: 1,
    },
    {
      question: "The average of 6 consecutive odd numbers is 41. What is the smallest of these numbers?",
      options: ["37", "35", "39", "33"],
      answer: 0,
    },
    {
      question: "The ratio of the ages of A and B is 5:7. After 6 years, their ages will be in the ratio of 3:4. What is B's current age?",
      options: ["21 years", "28 years", "35 years", "42 years"],
      answer: 3,
    },
    {
      question: "The marked price of an article is ₹2000. A shopkeeper allows a discount of 10% and still gains 20%. What is the cost price of the article?",
      options: ["₹1400", "₹1500", "₹1600", "₹1700"],
      answer: 1,
    },
    {
      question: "Two numbers are such that their HCF is 12 and their product is 864. What is their LCM?",
      options: ["36", "72", "84", "96"],
      answer: 3,
    },
    {
      question: "A sum of ₹1200 is divided among A, B, and C in the ratio 3:4:5. What is C's share?",
      options: ["₹400", "₹500", "₹600", "₹700"],
      answer: 2,
    },
    {
      question: "If the perimeter of a square is equal to the circumference of a circle, and the radius of the circle is 7 cm, what is the side of the square?",
      options: ["11 cm", "14 cm", "22 cm", "28 cm"],
      answer: 1,
    },
    {
      question: "Two trains of lengths 120 m and 150 m are running in opposite directions at speeds of 60 km/h and 40 km/h. How much time will they take to cross each other?",
      options: ["12 seconds", "14.4 seconds", "15 seconds", "18 seconds"],
      answer: 1,
    },
    {
      question: "A mixture of 40 liters contains milk and water in the ratio 3:1. How much water should be added to make the ratio 2:1?",
      options: ["10 liters", "8 liters", "5 liters", "6 liters"],
      answer: 2,
    },
    {
      question: "If x² - 5x + 6 = 0, what is the sum of the roots?",
      options: ["-5", "5", "6", "-6"],
      answer: 1,
    },
    {
      question: "A can complete a task in 10 days, and B can complete the same task in 15 days. If they work together for 5 days, what fraction of the task remains?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      answer: 1,
    },
    {
      question: "The difference between simple interest and compound interest on ₹5000 at 10% per annum for 2 years is:",
      options: ["₹25", "₹50", "₹100", "₹75"],
      answer: 0,
    },
    {
      question: "A box contains 3 red, 5 blue, and 4 green balls. What is the probability of picking a blue ball?",
      options: ["1/2", "5/12", "1/4", "7/12"],
      answer: 1,
    },
    {
      question: "If 3x - y = 5 and 2x + y = 4, what is the value of x?",
      options: ["1", "2", "3", "4"],
      answer: 1,
    },
    {
      question: "The ratio of boys to girls in a school is 7:5. If the total number of students is 720, how many boys are there?",
      options: ["300", "420", "500", "504"],
      answer: 1,
    },
    {
      question: "A sum of ₹5000 amounts to ₹6000 in 2 years at simple interest. What is the rate of interest per annum?",
      options: ["5%", "10%", "15%", "20%"],
      answer: 3,
    }
  ];
 
  const logicalReasoningQuizData = [
    {
      question: "A is the mother of B. C is the son of B. D is the brother of C. How is A related to D?",
      options: ["Mother", "Grandmother", "Aunt", "Sister"],
      answer: 1,
    },
    {
      question: "If 'APPLE' is coded as 'ELPPA' and 'ORANGE' as 'EGNARO,' how will 'BANANA' be coded?",
      options: ["ANANAB", "NABANA", "ANANABN", "NANAAB"],
      answer: 0,
    },
    {
      question: "Pointing to a man, Sarah said, 'He is the son of my grandfather's only son.' How is the man related to Sarah?",
      options: ["Brother", "Cousin", "Uncle", "Nephew"],
      answer: 0,
    },
    {
      question: "In a certain code language, '123' means 'sky is blue,' '345' means 'blue is bright,' and '567' means 'bright is sunny.' What does 'is' stand for?",
      options: ["2", "3", "4", "5"],
      answer: 1,
    },
    {
      question: "A man starts walking north, then turns east, then south, and then west. If he walks the same distance in each direction, where will he end up?",
      options: ["North", "East", "Back at the starting point", "West"],
      answer: 2,
    },
    {
      question: "Complete the series: 2, 6, 12, 20, 30, __?",
      options: ["36", "40", "42", "48"],
      answer: 2,
    },
    {
      question: "Which of the following does not belong to the group?",
      options: ["Cat", "Dog", "Elephant", "Cheetah"],
      answer: 2,
    },
    {
      question: "If ‘+’ means ‘×’, ‘×’ means ‘-’, ‘-’ means ‘÷’, and ‘÷’ means ‘+’, what is the value of 8 × 4 ÷ 2 - 6 + 3?",
      options: ["14", "10", "16", "12"],
      answer: 3,
    },
    {
      question: "If it takes 5 machines 5 minutes to make 5 widgets, how long will it take 100 machines to make 100 widgets?",
      options: ["5 minutes", "10 minutes", "50 minutes", "100 minutes"],
      answer: 0,
    },
    {
      question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      options: ["0°", "7.5°", "90°", "97.5°"],
      answer: 3,
    },
    {
      question: "Arrange the given words in the sequence in which they occur in a dictionary: 1. Resolve 2. Resolution 3. Resonate 4. Respond",
      options: ["2, 1, 4, 3", "1, 2, 3, 4", "1, 2, 4, 3", "2, 1, 3, 4"],
      answer: 2,
    },
    {
      question: "If A = 1, B = 2, C = 3, and so on, what is the value of 'FACE'?",
      options: ["21", "22", "23", "24"],
      answer: 1,
    },
    {
      question: "Five friends are sitting in a row. P is to the right of Q, R is to the left of Q, but to the right of S. If T is to the right of P, who is sitting in the middle?",
      options: ["Q", "R", "S", "P"],
      answer: 0,
    },
    {
      question: "Which number replaces the question mark in the sequence: 3, 9, 27, 81, ?",
      options: ["121", "243", "162", "324"],
      answer: 1,
    },
    {
      question: "In a certain code, ‘TABLE’ is written as ‘GZOVI.’ How is ‘CHAIR’ written in that code?",
      options: ["XZRVM", "XZVMR", "YZVRM", "YZRMV"],
      answer: 1,
    },
    {
      question: "If A is taller than B but shorter than C, and D is shorter than A but taller than B, who is the tallest?",
      options: ["A", "B", "C", "D"],
      answer: 2,
    },
    {
      question: "Six people P, Q, R, S, T, and U are sitting in a circle. Q is to the immediate left of P, R is to the immediate right of P, and T is between S and U. Who is opposite P?",
      options: ["S", "T", "U", "Cannot be determined"],
      answer: 3,
    },
    {
      question: "If 1 is coded as A, 2 as B, 3 as C, and so on, what is the code for 'HELLO'?",
      options: ["85121215", "8751215", "8511215", "8512135"],
      answer: 0,
    },
    {
      question: "A man is 24 years older than his son. In 2 years, his age will be twice that of his son. What is the son's current age?",
      options: ["20", "22", "21", "24"],
      answer: 1,
    },
    {
      question: "If 'some cats are dogs' and 'all dogs are animals,' which of the following conclusions is true?",
      options: [
        "Some cats are animals",
        "All cats are animals",
        "Some animals are cats",
        "Both A and C",
      ],
      answer: 3,
    },
  ];
  
  const verbalAbilityQuizData = [
    {
      question: "Choose the word that is most similar in meaning to 'ABATE':",
      options: ["Decrease", "Conquer", "Exclude", "Lament"],
      answer: 0,
    },
    {
      question: "Select the correctly spelled word:",
      options: ["Accomodate", "Accummodate", "Accommodate", "Acommodate"],
      answer: 2,
    },
    {
      question: "Choose the correct meaning of the idiom: 'Burning the midnight oil.'",
      options: [
        "Working late at night",
        "Saving energy",
        "Overthinking",
        "Partying all night",
      ],
      answer: 0,
    },
    {
      question: "Fill in the blank: He was so tired that he could hardly ______ his eyes open.",
      options: ["keep", "kept", "keeping", "to keep"],
      answer: 0,
    },
    {
      question: "Which of the following sentences is grammatically correct?",
      options: [
        "She don't like coffee.",
        "Neither of the boys have finished their homework.",
        "Each of the participants was given a certificate.",
        "The list of items are on the table.",
      ],
      answer: 2,
    },
    {
      question: "Choose the word that is opposite in meaning to 'INSIPID':",
      options: ["Boring", "Tasteless", "Vivid", "Weak"],
      answer: 2,
    },
    {
      question: "Complete the analogy: 'Book is to Reading as Pen is to ______.'",
      options: ["Drawing", "Writing", "Inking", "Studying"],
      answer: 1,
    },
    {
      question: "Choose the sentence that best combines the following: 'She was tired. She completed her work.'",
      options: [
        "She was tired, but she completed her work.",
        "She completed her work because she was tired.",
        "Tired, she completed her work.",
        "She was tired; therefore, she completed her work.",
      ],
      answer: 0,
    },
    {
      question: "Identify the part of speech of the underlined word: She sings *beautifully*.",
      options: ["Noun", "Adjective", "Verb", "Adverb"],
      answer: 3,
    },
    {
      question: "What is the synonym of 'OBLIVIOUS'?",
      options: ["Aware", "Unaware", "Careful", "Compassionate"],
      answer: 1,
    },
    {
      question: "Find the error in the sentence: 'Each of the girls are carrying a bouquet of flowers.'",
      options: [
        "Each of the girls",
        "are carrying",
        "a bouquet",
        "No error",
      ],
      answer: 1,
    },
    {
      question: "Select the word that best fits the blank: The evidence was so ______ that the jury had no choice but to convict.",
      options: ["Ambiguous", "Inconclusive", "Compelling", "Dubious"],
      answer: 2,
    },
    {
      question: "What does the idiom 'Bite the bullet' mean?",
      options: [
        "To do something unpleasant that is unavoidable",
        "To act carelessly",
        "To hurt someone intentionally",
        "To speak aggressively",
      ],
      answer: 0,
    },
    {
      question: "Choose the word that does NOT belong in the group:",
      options: ["Joy", "Happiness", "Ecstasy", "Despair"],
      answer: 3,
    },
    {
      question: "Identify the sentence with correct punctuation:",
      options: [
        "She asked 'Where are you going'?",
        "She asked, 'Where are you going?'",
        "She asked, where are you going?",
        "She asked, 'where are you going'?",
      ],
      answer: 1,
    },
    {
      question: "Which sentence uses the correct subject-verb agreement?",
      options: [
        "The team are playing well.",
        "The team is playing well.",
        "The team were playing well.",
        "The team have playing well.",
      ],
      answer: 1,
    },
    {
      question: "Choose the correct option to complete the sentence: She was ______ interested in the topic.",
      options: ["deep", "deeply", "depth", "deepen"],
      answer: 1,
    },
    {
      question: "What is the meaning of the phrase 'To add fuel to the fire'?",
      options: [
        "To calm down a situation",
        "To make a situation worse",
        "To provide support",
        "To create a solution",
      ],
      answer: 1,
    },
    {
      question: "Choose the sentence that is written in active voice:",
      options: [
        "The cake was eaten by the children.",
        "The children ate the cake.",
        "The cake had been eaten by the children.",
        "The cake is being eaten by the children.",
      ],
      answer: 1,
    },
    {
      question: "What is the antonym of 'METICULOUS'?",
      options: ["Careless", "Diligent", "Cautious", "Thorough"],
      answer: 0,
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
const quiz = document.querySelector(".quiz");
const quizSelection = document.querySelector('.quiz-selection')
const startBtn =document.querySelectorAll('.start-game-Btn')
const animationStatement = document.querySelector('.animation')




let currentQuiz = 0;
let score = 0;
let quizData = []



//Clinking on the respective quiz button the dataset will be stored in quizdata
startBtn.forEach((b)=>{
  b.addEventListener('click', (e) => {
    animationStatement.style.display = "none"
    quizSelection.style.display = "none";
    welcome.style.display = "none";
    quiz.style.display = "block";
    const selectedQuiz = e.target.id
    // console.log(selectedQuiz);
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
    else if(selectedQuiz === 'QuantApti'){
      quizData = quantAptitudeQuizData
    }
    else if(selectedQuiz === 'LogicalReasoning'){
      quizData = logicalReasoningQuizData
    }
    else if(selectedQuiz === 'VerbalAbility'){
      quizData = verbalAbilityQuizData
    }
    // console.log(quizData);
    loadQuiz();
  })
})


//------LOAD QUIZ----step1
loadQuiz = () => {
  // console.log(quizData);
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
