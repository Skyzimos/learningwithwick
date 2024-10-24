/*

  Flags:

    - limit_selection:
        Limits the number of selected answers to the specified numbers.
        Type: table OR number (When type is number, it defaults to minmax, with require_maximum true.)
        Defaults: no_limit
        Format: {
          limit_selection: {
            minimum,          <-- NUMBER: Minimum required selections. (Optional, defualts to 1.)
            maximum,          <-- NUMBER: Maximum allowed selections. (Optional, defaults to number of questions.)
            require_maximum   <-- BOOLEAN: Whether the user can continue without selecting the maximum selections or not. (Optional, defualts to false.)
          }
        }

*/

let chapterNumber = 2;
let quizData = {
  'You should read your operator’s manual and know how to use all the equipment.': {
    type: 'true_false',
    data: {
        answers: [
          1
        ]
    }
  },
  'What is the minimum tread depth allowed by law?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '1/4 inch',
        '1/32 inch',
        '1/2 inch',
        '1/16 inch'
      ],
      answers: [
        '1/16 inch'
      ]
    }
  },
  'It is not necessary to understand all indicators and gauges.': {
    type: 'true_false',
    data: {
      answers: [
        '2'
      ]
    }
  },
  'PSI stands for:': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Pounds Source Inside',
        'Pressure Source Inside',
        'Pounds Per Square Inch',
      ],
      answers: [
        'Pounds Per Square Inch'
      ]
    }
  },
  'Dirty headlights can reduce light output.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'Tire pressure has been known to change with time and temperature changes.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'Which of the following would help keep your car in good operating condition: (mark each correct answer)': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 6,
      },
      questions: [
        'Keep a properly tuned engine.',
        'Keep properly inflated tires.',
        'Keep your eyes moving.',
        'Aim high steering.',
        'Use the recommended grade of oil.',
        'Get the big picture.'
      ],
      answers: [
        'Keep a properly tuned engine.',
        'Keep properly inflated tires.',
        'Use the recommended grade of oil.'
      ]
    }
  },
  'Tire pressure has been known to change with time and temperature changes.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'Before starting a car that is "new" to you, the first thing you should adjust is your mirrors.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'Your car is required to have 2 separate brake systems.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'GPS devices are illegal in Minnesota.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'It is illegal to have a "For Sale" sign on any window of a moving car.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'What gear should an automatic transmission be in before starting your car?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Neutral',
        'Park',
        'Reverse',
        'Overdrive',
      ],
      answers: [
        'Park'
      ]
    }
  },
  'Where should your right foot be when starting a vehicle?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Brake',
        'Accelerator',
        'Clutch',
        'Floor'
      ],
      answers: [
        'Brake'
      ]
    }
  },
  'You\'re required to have a working horn on your vehicle when taking the road test.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'Which of the following can be used in place of your horn if it does not work?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Whistle',
        'Siren',
        'Bell',
        'All of these.',
        'None of these.'
      ],
      answers: [
        'None of these.'
      ]
    }
  },
  ' A white light is required for the rear license plate.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'It is legal for your car to make sudden, or prolonged loud popping or cracking sounds.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'What is required of your vehicle if your view from the rearview mirror is blocked?': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'You must have a rear bumper camera.',
        'You must have a warning signal while in reverse.',
        'You must have larger or additional side mirrors.',
        'All of the above.'
      ],
      answers: [
        'You must have larger or additional side mirrors.'
      ]
    }
  },
  'Is there a significant difference in the rate of injuries when a seat belt is worn versus when one is not worn?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Yes',
        'No'
      ],
      answers: [
        'Yes'
      ]
    }
  },
  'If you have airbags, seat belts are not necessary.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  '_______ is the property of matter that causes it to resist any change in its motion.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Interia',
        'Constant',
        'Vector',
        'Motion'
      ],
      answers: [
        'Inertia'
      ]
    }
  },
  'Newton\'s 3rd law states - A body at rest remains at rest and a body in motion remains in motion unless acted upon by an external force.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'The formula for force is mass divided by acceleration.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  }
}

/*

  Do not touch anything below. It is the core script
  that creates/manages the quiz. Only edit values
  and data above.

*/

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

localStorage.setItem('last-played', chapterNumber);

function shuffleArray(array) {
let new_arr = [];

for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
  new_arr[j] = array[i]
  // [array[i], array[j]] = [array[j], array[i]]; // Swap elements
}

console.log(array)
return array;
}

function adjustQuestionPosition() {
const questionText = document.getElementById('question-text');
const containerMaxHeight = 40; // Adjust this to your max height value

// Measure the actual height of the text
const textHeight = questionText.scrollHeight;

// If the text height exceeds the container's max height, adjust the position
if (textHeight > containerMaxHeight) {
  // Example: Move the text up by decreasing margin-top (adjust this logic as needed)
  questionText.style.marginTop = `${containerMaxHeight - textHeight}px`;
  console.log(`${containerMaxHeight - textHeight}px`)
} else {
  // Reset margin if text fits
  questionText.style.marginTop = '0px';
}
}

function updateDisplay(text) {
const questionText = document.getElementById('question-text');
questionText.textContent = text;

adjustQuestionPosition();
}

function switchImage(inout) {
if (inout == true) {
  document.querySelector('.image').classList.remove('inactive');
  document.querySelector('.image').classList.add('active');
} else {
  document.querySelector('.image').classList.remove('active');
  document.querySelector('.image').classList.add('inactive');
}
}

let currentQuestionIndex = 0;
const selectedAnswers = {};
const totalQuestions = Object.keys(quizData).length;

function saveAnswer(questionIndex, answer) {
const questionObj = quizData[Object.keys(quizData)[questionIndex]];

if (questionObj.type === 'multiple_choice') {
  if (selectedAnswers[questionIndex]) {
    selectedAnswers[questionIndex] = answer;
  } else {
    if (typeof answer == 'object') {
      selectedAnswers[questionIndex] = answer;
    } else {
      selectedAnswers[questionIndex] = [answer]
    }
  }
} else if (questionObj.type === 'true_false') {
  selectedAnswers[questionIndex] = answer;
}

console.log(selectedAnswers)
}

function getAnswer(questionIndex) {
return selectedAnswers[questionIndex] || {};
}

function displayQuestion(quizData, index) {
const questionsContainer = document.getElementById('questions-container');
questionsContainer.innerHTML = '';

const questionKey = Object.keys(quizData)[index];
const questionObj = quizData[questionKey];

const questionElement = document.createElement('div');
questionElement.className = 'question';

const optionsContainer = document.createElement('div');
optionsContainer.className = 'options';

if (questionObj.data.image) {
  document.querySelector('.image').style.display = 'block';
  document.querySelector('.image').src = '/learningwithwick' + questionObj.data.image;
  switchImage(true);
} else {
  document.querySelector('.image').style.display = 'none';
}

if (questionObj.type === 'multiple_choice') {
  const limitSelection = questionObj.data.limit_selection || {};
  const limit = typeof limitSelection === 'number' ? limitSelection : limitSelection.maximum || null;
  const minSelection = limitSelection.minimum || 1;
  const requireMax = limitSelection.require_maximum || false;

  // Object.values is the only way to use functions of the table, and the arrray within.
  let selectedCount = Object.values(getAnswer(index))?.length || 0;

  questionObj.data.questions.forEach((option, i) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.style.cursor = 'pointer';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = i;
    checkbox.value = i;
    checkbox.classList.add(`question-${index}-checkbox`);
    checkbox.dataset.uniqueId = uid();

    // Turn i into a string, because that's the format it's saved as.
    if (Object.values(getAnswer(index))?.includes(i.toString())) {
      checkbox.checked = true;
    }

    optionElement.addEventListener('click', function () {
      checkbox.checked = !checkbox.checked;

      const checkboxes = document.querySelectorAll(`.question-${index}-checkbox`);
      let selectedCount = Array.from(checkboxes).filter(chk => chk.checked).length;

      if (limit === 1) {
        // If limit is 1, allow only one option to be selected at a time
        checkboxes.forEach(chk => {
          if (chk.dataset.uniqueId !== checkbox.dataset.uniqueId) chk.checked = false;
        });
        selectedCount = 1;
      }

      // Enforce maximum selection limit
      if (limit && selectedCount > limit) {
        checkbox.checked = false;
        alert(`You can only select up to ${limit} options.`);
        return;
      }

      // Ensure minimum selections are met and alert if necessary
      if (selectedCount < minSelection) {
        alert(`You need to select at least ${minSelection} option(s).`);
        return;
      }

      let array = Array.from(checkboxes)
        .filter(chk => chk.checked == true)
        .map(chk => chk.value);

        console.log(array);
        saveAnswer(index, array);
    });

    const label = document.createElement('label');
    label.textContent = option;

    optionElement.appendChild(checkbox);
    optionElement.appendChild(label);
    optionsContainer.appendChild(optionElement);
  });

  questionElement.appendChild(optionsContainer);
} else if (questionObj.type === 'true_false') {
  ['True', 'False'].forEach((option, i) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.style.cursor = 'pointer';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = `question-${index}`;
    radio.value = option;

    if (getAnswer(index) === (i + 1)) {
      radio.checked = true;
    }

    optionElement.addEventListener('click', function () {
      radio.checked = true;
      saveAnswer(index, (i + 1));
    });

    const label = document.createElement('label');
    label.textContent = option;

    optionElement.appendChild(radio);
    optionElement.appendChild(label);
    optionsContainer.appendChild(optionElement);
  });

  questionElement.appendChild(optionsContainer);
}

questionsContainer.appendChild(questionElement);
}

function updateButtons(index, totalQuestions) {
const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');

if (index === 0) {
  prevButton.style.display = 'none';
} else {
  prevButton.style.display = 'inline-block';
}

if (index === totalQuestions - 1) {
  nextButton.style.display = 'none';
  submitButton.style.display = 'inline-block';
} else {
  nextButton.style.display = 'inline-block';
  submitButton.style.display = 'none';
}
}

function canProceed(quizData, index) {
const questionObj = quizData[Object.keys(quizData)[index]];
const checkboxes = document.querySelectorAll(`.question-${index}-checkbox`);

let array = Array.from(checkboxes)
        .filter(chk => chk.checked == true)
        .map(chk => chk.value);

const selectedCount = array?.length || 0;

if (questionObj.type === 'multiple_choice') {
  const limitSelection = questionObj.data.limit_selection;

  if (typeof limitSelection === 'object') {
    const min = limitSelection.minimum || 1;
    const max = limitSelection.maximum || questionObj.data.questions.length;
    const requireMax = limitSelection.require_maximum || false; // Require maximum selections, default is false

    // Check if the number of selected answers meets the criteria
    if (selectedCount >= min && (selectedCount <= max || !requireMax)) {
      saveAnswer(index, array);
      return true; // Allowed to proceed if within limits
    } else if (selectedCount === max && requireMax) {
      saveAnswer(index, array);
      return true; // If exactly at max and require_maximum is true
    } else {
      return false; // Cannot proceed if the selection is outside the limits
    }

  // If limit_selection is a number (shortcut for max selection)
  } else if (typeof limitSelection === 'number') {
    return selectedCount === limitSelection; // Proceed only if selected matches the limit
  }
}

// Default to allowing progression for other question types
return true;
}

function gradeQuiz(quizData) {
let correctAnswers = 0;
let incorrectAnswers = [];
const totalQuestions = Object.keys(quizData).length;

Object.keys(quizData).forEach((key, index) => {
  let userAnswer = selectedAnswers[index];
  let questionObj = quizData[key];
  if (!userAnswer || !questionObj) return;
  
  if (questionObj.type == 'multiple_choice') {
    const correctAnswersArray = questionObj.data.answers;
    console.log(correctAnswersArray);

    const userAnswersSet = new Set(userAnswer.map((idx) => questionObj.data.questions[idx]));
    const correctAnswersSet = new Set(correctAnswersArray);

    console.log(userAnswersSet, correctAnswersSet);
    if (userAnswersSet.size === correctAnswersSet.size && [...userAnswersSet].every(answer => correctAnswersSet.has(answer))) {
      correctAnswers++;
    } else {
      incorrectAnswers.push(index);
    }
  } else if (questionObj.type === 'true_false') {
    const correctAnswer = questionObj.data.answers[0];

    console.log(userAnswer, correctAnswer);
    if (userAnswer.toString() == correctAnswer.toString()) {
      correctAnswers++;
    } else {
      incorrectAnswers.push(index);
    }
  }
});

return {
  score: correctAnswers,
  totalQuestions: totalQuestions,
  incorrectAnswers: incorrectAnswers,
};
}

let debounce = false;

document.getElementById('next-button').addEventListener('click', function () {
if (debounce) return;
debounce = true;
if (!canProceed(quizData, currentQuestionIndex)) {
  alert('Please select the required number of options.');
  return;
}

switchImage(false);

setTimeout(() => {
  if (currentQuestionIndex < Object.keys(quizData).length - 1) {
    currentQuestionIndex++;
    document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`
    updateButtons(currentQuestionIndex, totalQuestions);
    displayQuestion(quizData, currentQuestionIndex);
    const questionKey = Object.keys(quizData)[currentQuestionIndex];
    document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`
    updateDisplay(`${currentQuestionIndex + 1}. ${questionKey}`)
    debounce = false;
  }
}, 250)
});

document.getElementById('previous-button').addEventListener('click', function () {
switchImage(false);

setTimeout(() => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`
    updateButtons(currentQuestionIndex, totalQuestions);
    displayQuestion(quizData, currentQuestionIndex);
    const questionKey = Object.keys(quizData)[currentQuestionIndex];
    updateDisplay(`${currentQuestionIndex + 1}. ${questionKey}`)
  }
}, 250)
});

function convertScore(correct, outOf) {
if (outOf === 0) return { percentage: 0, scale: 0 }; // Prevent division by zero
let scale = correct / outOf;
return {
    percentage: +(scale * 100).toFixed(2),  // Rounded to 2 decimal places
    scale: +scale.toFixed(4)                // Rounded to 4 decimal places
};
}

function startTimer() {
const startTime = Date.now(); // Get the start time in milliseconds

return function getElapsedTime() {
    const elapsedTime = (Date.now() - startTime) / 1000; // Time in seconds
    return Math.floor(elapsedTime); // Return seconds as an integer
};
}

function isQuizPassed(correctAnswers, totalQuestions) {
let percentageCorrect = (correctAnswers / totalQuestions) * 100;
return percentageCorrect >= 80;
}

function updateQuizStatistics(newQuizData) {
let chapterId = 'chapter_' + chapterNumber;
let storedStats = JSON.parse(localStorage.getItem('stats')) || {};
let lastHadStats = true;

// Initialize the chapter structure if it doesn't exist
if (!storedStats[chapterId]) {
    lastHadStats = false;
    storedStats[chapterId] = {
        quizzes: [],
        totalScore: 0,
        totalQuestions: totalQuestions,
        totalAccuracy: 0,
        bestScore: 0,
        worstScore: newQuizData.missedQuestions.length,
        numQuizzes: 0,
        totalTimeSpent: 0,
        unlocked: false,
    };
}

// Reference the current chapter data
let chapter = storedStats[chapterId];

if (!chapter.unlocked && isQuizPassed(newQuizData.score, Object.keys(quizData).length)) {
  chapter.unlocked = true;
}

// Update the aggregate statistics at the chapter level
chapter.totalScore += newQuizData.score;
chapter.totalAccuracy += newQuizData.accuracy;
chapter.numQuizzes += 1;
chapter.totalTimeSpent += newQuizData.timeSpent;

// Update best and worst scores if applicable
chapter.bestScore = Math.max(chapter.bestScore, newQuizData.score);
chapter.worstScore = Math.min(chapter.worstScore, newQuizData.score);

chapter.quizzes.push(newQuizData);
localStorage.setItem('stats', JSON.stringify(storedStats));
}

const getElapsedTime = startTimer();

document.getElementById('submit-button').addEventListener('click', function () {
const timeSpent = getElapsedTime();
const result = gradeQuiz(quizData);
const scoreConverted = convertScore(result.score, result.totalQuestions);
let newQuiz = {
  quizId: uid(),
  score: result.score,
  accuracy: scoreConverted.scale,
  missedQuestions: result.incorrectAnswers,
  dateTaken: new Date().toISOString(),
  timeSpent: timeSpent
};

updateQuizStatistics(newQuiz);

console.log('Selected Answers:', selectedAnswers);
sessionStorage.setItem('item', JSON.stringify(selectedAnswers))
location.href = '/learningwithwick/practice/games/loading/'
});

displayQuestion(quizData, currentQuestionIndex);
updateButtons(currentQuestionIndex, totalQuestions);
const questionKey = Object.keys(quizData)[currentQuestionIndex];
updateDisplay(`${currentQuestionIndex + 1}. ${questionKey}`)
document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`