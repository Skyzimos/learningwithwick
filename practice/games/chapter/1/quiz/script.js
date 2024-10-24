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

let chapterNumber = 1;
let quizData = {
  'Which of the following can be used as a primary I.D. (Select the 4 correct answers.)': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 4,
        maximum: 7,
      },
      questions: [
          'Social Security Card',
          'Hospital Birth Certificate',
          'Certified Birth Certificate',
          'State I.D. Card',
          'U.S. Citizenship Documents',
          'School I.D.',
          'Unexpired U.S. Passport',
        ],
        answers: [
          // Select any amount of the correct answers.
          'Certified Birth Certificate',
          'State I.D. Card',
          'U.S. Citizenship Documents',
          'Unexpired U.S. Passport',
        ]
    }
  },
  'Hospital-issued certificates of birth or any copies are acceptable forms of identification.': {
    type: 'true_false',
    data: {
      answers: [
        // 1 = true, 2 = false
        2
      ]
    }
  },
  'Students of parents or legal guardian who did not attend the supplemental parent class must complete and log a minimum of ____ hours, 15 of which must be at night.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '40',
        '50',
        '60',
        '120',
      ],
      answers: [
        '50'
      ]
    }
  },
  'Students of parents or legal guardian that attended the supplemental parent class must complete and log a minimum of ____ hours, 15 of which must be at night.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '40',
        '60',
        '90',
        '120',
      ],
      answers: [
        '40'
      ]
    }
  },
  'There is a fee to obtain your permit at the DVS.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'The most commonly used document(s) for a primary identification is _______.': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'Official Transcript',
        'School I.D.',
        'Social Security Card',
        'Certified Birth Certificate',
      ],
      answers: [
        'Certified Birth Certificate'
      ]
    }
  },
  'A social security card, school ID, and school transcripts are all primary forms of identification.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'When applying for your permit, you will be asked to give your social security number.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'How long is your permit valid for?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '1 Year',
        '2 Years',
        '3 Years',
        '5 Years',
      ],
      answers: [
        '2 Years'
      ]
    }
  },
  'Your vision will be tested when you apply for, or renew your drivers license.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  ' If you are under 18, you must have a certificate of enrollment, also known as a __________, to take the permit test.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Pink Card',
        'Blue Card',
        'Yellow Card',
        'White Card',
      ],
      answers: [
        'Blue Card'
      ]
    }
  },
  'If under 18, you must complete the classroom phase of driver education. However, financial enrollment in behind-the-wheel is optional to be eligible to take the permit test.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'If under 18, you must have a certificate of completion, also known as a __________, to take the road test.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Pink Card',
        'Blue Card',
        'Yellow Card',
        'White Card',
      ],
      answers: [
        'White Card'
      ]
    }
  },
  'In Minnesota you must be at least ______ years of age to obtain a regular Class D permit.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '14',
        '15',
        '16',
        '17'
      ],
      answers: [
        '15'
      ]
    }
  },
  'The GDL passenger limitation is not exempt when accompanied by a parent or guardian.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'For the first six months of licensure, only two non-immediate family members under 20 years of age are allowed as passengers.': {
    type: 'true_false',
    data: {
      answers: [
        2
      ]
    }
  },
  'You must be at least 16 years old and have had your permit at least __________with a clean driver record before being eligible for a provisional license.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '3 Months',
        '6 Months',
        '9 Months',
        '12 Days'
      ],
      answers: [
        '6 Months'
      ]
    }
  },
  'GDL restrictions prohibit night time driving for the first six months between the hours of:': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '11:00pm to 6:00am',
        'Midnight (12:00am) to 5:00am',
        '10:00pm to 5:00am'
      ],
      answers: [
        'Midnight (12:00am) to 5:00am'
      ]
    }
  },
  'For the second six months of licensure, only ____ non-immediate family members that are passengers under 20 years old are allowed.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '5',
        '4',
        '3',
        '2'
      ],
      answers: [
        '3'
      ]
    }
  },
  'If under 18, you need approval from your parent or legal guardian to take the road test.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'Proof of insurance is necessary for the vehicle used for the road test.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'You provide your own vehicle for your road test.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'To qualify for a full class D license, you must be 18 or maintain a good driving record for ______consecutive months.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '18',
        '12',
        '6',
        '3'
      ],
      answers: [
        '12'
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