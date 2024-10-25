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

let chapterNumber = 3;
let quizData = {
  'The four categories of signs are:': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Informational, Regulatory, Prohibition, Interchange',
        'Recreational, Command, Warning, Construction',
        'Informational, Regulatory, Warning, Construction',
        'Recreational, Command, Prohibition, Interchange',
      ],
      answers: [
          'Informational, Regulatory, Warning, Construction'
        ]
    }
  },
  'This sign prohibits U-turns.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/no u turns.png',
      answers: [
        1,
      ]
    }
  },
  'What word is in the middle of this sign?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/yield.png',
      limit_selection: 1,
      questions: [
        'Stop',
        'Yield',
        'Look Right',
        'Railroad Crossing',
      ],
      answers: [
        'Yield',
      ]
    }
  },
  'This multiple direction sign means:': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/turns.png',
      limit_selection: 1,
      questions: [
        'You may go straight through the intersection from either lane.',
        'You may only go left.',
        'You may go straight or left from either lane.',
        'You may turn left from either lane.',
      ],
      answers: [
        'You may turn left from either lane.',
      ]
    }
  },
  'Yellow is the background color used for warning signs.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'This sign means left turns only?': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/center lane.png',
      answers: [
        1,
      ]
    }
  },
  'You may park here if you have an injured passenger in the vehicle.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/handicap.png',
      answers: [
        2,
      ]
    }
  },
  'This sign indicates a school zone; you must always approach slowly and carefully.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/school zone.jpg',
      answers: [
        1,
      ]
    }
  },
  'Which of the following signs indicate a slow moving vehicle (max speed 30mph)?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/road signs warning/',
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'A',
        'B',
        'C',
        'D',
      ],
      answers: [
        'C',
      ]
    }
  },
  'This sign shows a road with a gradual curve to the right, then to the left?': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/windy road.png',
      answers: [
        2,
      ]
    }
  },
  'Which sign(s) indicates that the road is slippery when wet?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/slippery road/',
      limit_selection: {
        minimum: 1,
        maximum: 3,
      },
      questions: [
        'A',
        'B',
        'C'
      ],
      answers: [
        'C',
      ]
    }
  },
  'Which of the following sign(s) warn of an upcoming railroad crossing?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/railroad crossing/',
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'A',
        'B',
        'C',
        'D',
      ],
      answers: [
        'A',
      ]
    }
  },
  'This sign indicates a pedestrian crossing?': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/pedestrian crossing.jpg',
      answers: [
        1,
      ]
    }
  },
  'Which of the following sign(s) indicates a school zone?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/school zone.jpg',
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'A',
        'B',
        'C',
        'D'
      ],
      answers: [
        'B',
      ]
    }
  },
  'Which of the following shaped sign(s) indicates a no-passing zone?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/no passing zone.jpg',
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'Circle',
        'Pennant',
        'Triangle',
        'Pentagon',
      ],
      answers: [
        'Pennant',
      ]
    }
  },
  'This sign warns all vehicles of a steep decline ahead; check the brakes.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/steep decline.png',
      answers: [
        1,
      ]
    }
  },
  'Which of these sign(s) indicates that the divided highway is ending?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/divided highway/',
      limit_selection: {
        minimum: 1,
        maximum: 2,
      },
      questions: [
        'A',
        'B',
      ],
      answers: [
        'B',
      ]
    }
  },
  'This sign indicates a right lane ends, merge left.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/lane ends.jpg',
      answers: [
        1,
      ]
    }
  },
  'This sign indicates an added lane, merging is necessary.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/non added lane.png',
      answers: [
        2,
      ]
    }
  },
  'This signs indicates an added lane, merging is necessary.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/added lane.png',
      answers: [
        2,
      ]
    }
  },
  'This is an orange sign indicating a person with a flag ahead, no action necessary.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/flag man.jpg',
      answers: [
        2,
      ]
    }
  },
  'What should drivers do when traveling through an intersection with a flashing yellow light?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Stop',
        'Go - as they have the right of way.',
        'Gunnit',
        'They must yield to oncoming traffic/pedestrians as they have the right of way.',
      ],
      answers: [
        'They must yield to oncoming traffic/pedestrians as they have the right of way.',
      ]
    }
  },
  'Which of the following is treated the same as a stop sign?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Solid Red Light',
        'Flashing Red Light',
        'Solid Yellow Light',
        'Flashing Yellow Light',
      ],
      answers: [
        'Flashing Red Light',
      ]
    }
  },
  'A left turn on a red light is allowed when:': {
    type: 'multiple_choice',
    data: {
      questions: [
        'The light is about to turn green.',
        'Turning from a one way to another one way.',
        'It\’s clear and safe.',
        'No pedestrians are present.',
      ],
      answers: [
        'Turning from a one way to another one way.',
      ]
    }
  },
  'Which of the following statement(s) is true:': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'I may proceed in the direction of the green arrow, and other drivers should yield to me.',
        'I must always stop for a green arrow.',
        'I may proceed in the direction of the red arrow.',
        'At a red arrow I must stop behind the crosswalk before proceeding.',
      ],
      answers: [
        'I may proceed in the direction of the green arrow, and other drivers should yield to me.',
      ]
    }
  },
  'Which of the following indicates \‘proceed with caution\’?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Flashing Red Light',
        'Solid Yellow Light',
        'Flashing Green Light',
        'Flashing Yellow Light',
      ],
      answers: [
        'Flashing Yellow Light',
      ]
    }
  },
  'A green light indicates  right-of way for a left turning vehicle.': {
    type: 'true_false',
    data: {
      answers: [
        2,
      ]
    }
  },
  'When the hand is raised or the \'don’t walk\' is flashing, a pedestrian can cross as long as they look both ways and hurry across.': {
    type: 'true_false',
    data: {
      answers: [
        2,
      ]
    }
  },
  'This sign is used with freeway ramp meters at on-ramps.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/one car per green.PNG',
      answers: [
        1
      ]
    }
  },
  'A white strobe light at a signalized intersection indicates that an emergency vehicle is approaching.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'What color lines indicate traffic traveling in opposite directions?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Blue',
        'Red',
        'Yellow',
        'White',
      ],
      answers: [
        'Yellow',
      ]
    }
  },
  'What color lines indicate traffic traveling in the same direction?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Yellow',
        'White',
        'Red',
        'Blue',
      ],
      answers: [
        'White',
      ]
    }
  },
  'A double white line prohibits lane changes.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'Double yellow lines indicate no passing zones.': {
    type: 'true_false',
    data: {
      answers: [
        1
      ]
    }
  },
  'A Which car is not allowed to pass?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/car pass.png',
      limit_selection: 1,
      questions: [
        'The green car, on the right side.',
        'The yellow car, on the left side.',
        'Both cars.',
        'Neither cars.',
      ],
      answers: [
        'The green car, on the right side.',
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
  } else if (questionObj.type == 'true_false') {
    console.log(selectedCount)
    return selectedCount == 1;
  }

  // Default to allowing progression for other question types
  return false;
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