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

let chapterNumber = 5;
let quizData = {
  'A stop sign requires that you reduce your speed slow enough to make sure it is safe and clear before proceeding.': {
    type: 'true_false',
    data: {
      answers: [
        2,
      ]
    }
  },
  'You should stop before entering which roadway(s).': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 3,
      },
      questions: [
        'An Alley',
        'A Private Driveway',
        'A Parking Ramp',
        'All of the above.',
      ],
      answers: [
        'All of the above.',
      ]
    }
  },
  'It is necessary to stop for a school safety patrol displaying a stop flag.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'When an emergency vehicle is displaying its lights and the siren is sounding on a two-way road, you must pull to the right and stop.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'You are required to stop if the emergency vehicle approaching you is separated from your lane by a physical barrier.': {
    type: 'true_false',
    data: {
      answers: [
        2,
      ]
    }
  },
  'Emergency vehicles include:': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Fire Trucks',
        'Ambulances',
        'Police Cars',
        'Tow Trucks',
        'All of the above.',
      ],
      answers: [
        'All of the above.',
      ]
    }
  }, // FINISHED HERE
  'Drivers, who have passengers under what age are responsible to make sure they are buckled properly?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '18',
        '17',
        '16',
        '15',
      ],
      answers: [
        '15',
      ]
    }
  },
  'Registering your vehicle in Minnesota is optional as long as you carry the proper insurance.': {
    type: 'true_false',
    data: {
      answers: [
        2,
      ]
    }
  },
  'Valid proof of insurance must be carried in the vehicle at all times.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'Owners of motor vehicles in Minnesota must carry ____________ and ______________       insurance.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Liability and No-Fault',
        'Liability and Vehicle',
        'Collision and No-Fault',
        'Car and Life',
      ],
      answers: [
        'Liability and No-Fault',
      ]
    }
  },
  'Anyone who flees a police officer on official duty will be charged with a:': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Gross Felony',
        'Felony',
        'Gross Misdemeanor',
        'Misdemeanor',
      ],
      answers: [
        'Felony',
      ]
    }
  },
  'Airbags reduce the force of impact and are supplemental to your seat belt?': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'Because of airbags, we now hold our steering wheel at: ___ and ___ OR ___ and ___.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 2,
      questions: [
        '11 & 1',
        '9 & 3',
        '8 & 4',
        '10 & 2',
        '7 & 5',
      ],
      answers: [
        '9 & 3',
        '8 & 4',
      ]
    }
  },
  'Which of the following statements are true in regard to seatbelts?': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'A small child can wear an adult seatbelt.',
        'A pregnant woman should not wear a seat belt.',
        'There is no need for a lap belt when an automatic shoulder belt is used.',
        'The chances of being killed or injured increases when a seatbelt is not worn.'
      ],
      answers: [
        'The chances of being killed or injured increases when a seatbelt is not worn.',
      ]
    }
  },
  'If involved in a traffic crash, it is important to stop, call 911, and stay safe?': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'Drivers should be sitting at least 10 inches between yourself and the steering wheel?': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'When turning left, remember to keep your wheels _________ while waiting at an intersection.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Straight',
        'Left',
        'Right',
        'Backwards',
      ],
      answers: [
        'Straight',
      ]
    }
  },
  'Reduced conflict intersections are designed to:': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 3,
      },
      questions: [
        'Reduce broadside accidents.',
        'Reduce rear end collisions.',
        'Reduce head on collisions.',
      ],
      answers: [
        'Reduce broadside accidents.',
      ]
    }
  },
  '2 lanes traveling in the same direction (Freeway Travel), which lane should you travel most often?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Right Lane',
        'Left Lane',
      ],
      answers: [
        'Right Lane',
      ]
    }
  },
  'Turn signals give a driver the “right of way”.': {
    type: 'true_false',
    data: {
      answers: [
        2,
      ]
    }
  },
  'How far in advance are you supposed to put your signal on before the turn?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '50 feet',
        '100 feet',
        '300 feet',
        '500 feet',
      ],
      answers: [
        '100 feet',
      ]
    }
  },
  'When do you use SMOG?': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'When you can\'t see.',
        'When you have too much carbon monoxide.',
        'To determine following distance.',
        'When making turns or lane changes.',
      ],
      answers: [
        'When making turns or lane changes.',
      ]
    }
  },
  'List some important steps for making lane changes (SMOG):': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Signal, mirror check, over the shoulder, gun it.',
        'Signal, mimic the other driver, over the shoulder, go.',
        'Signal, mirror check, over the shoulder, go when safe.',
        'Smoke the tires, mirror check, over the shoulder, go.',
      ],
      answers: [
        'Signal, mirror check, over the shoulder, go when safe.',
      ]
    }
  },
  'When making a right turn from a 4-lane or divided highway, you must enter the _________lane well in advance of the turn and make a tight turn into the   ____________lane of the cross street.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Right and Right',
        'Right and Any',
        'Any and Right',
        'Any and Any',
      ],
      answers: [
        'Right and Right',
      ]
    }
  },
  'When making a left turn from a four-lane or divided highway, move to the lane _______ to the centerline of traffic divide and enter the crossroad just to the  _____________ of the centerline.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Closest and Right',
        'Furthest and Right',
        'Closest and Left',
        'Furthest and Left',
      ],
      answers: [
        'Closest and Right',
      ]
    }
  },
  'You can use a bike lane to prepare for a right turn.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'Improper turns cause traffic crashes.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'Roundabouts are designed to?': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'Increase the speed of right turns and save time.',
        'Increase traffic flow and provide a safer intersection.',
        'Help large trucks avoid left turns.',
        'Help pedestrians cross safely.',
      ],
      answers: [
        'Increase traffic flow and provide a safer intersection.',
      ]
    }
  },
  'Use extra caution when passing:': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'At night.',
        'When visibility is poor.',
        'When the road is slippery.',
        'A large truck.',
        'All of the above.',
      ],
      answers: [
        'All of the above.',
      ]
    }
  },
  'When is it legal for you to drive faster than the posted limit?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Never',
        'When you are passing a vehicle on a 2-way roadway at least 55 mph.',
        'Occasionally',
        'Often',
      ],
      answers: [
        'When you are passing a vehicle on a 2-way roadway at least 55 mph.',
      ]
    }
  },
  'On a 2 lane, 2-way roadway, it is illegal to pass a left-turning vehicle on the shoulder?': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'When backing-up, your eyes should be looking out what part of the vehicle?': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
      questions: [
        'Rearview Mirror',
        'Rear Window',
        'Side Mirrors',
        'Close your eyes and hope you don\'t hit anything.',
      ],
      answers: [
        'Rear Window',
      ]
    }
  },
  'When a vehicle is properly parallel parked, its wheels should be no more than_______ inches from the curb.': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '6',
        '8',
        '10',
        '12',
      ],
      answers: [
        '12',
      ]
    }
  },
  'It is not necessary to turn the front wheels when parking on a hill?': {
    type: 'true_false',
    data: {
      answers: [
        2,
      ]
    }
  },
  'It is illegal to park:': {
    type: 'multiple_choice',
    data: {
      limit_selection: {
        minimum: 1,
        maximum: 3,
      },
      questions: [
        'Within 10 feet of a fire hydrant.',
        'In front of a mailbox.',
        'Next to a yellow curb.',
        'All of the above.',
      ],
      answers: [
        'All of the above.',
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

      if (limit === 1) {
        checkbox.type = 'radio';
        checkbox.name = i;
        checkbox.value = i;
        checkbox.classList.add(`question-${index}-checkbox`);
        checkbox.dataset.uniqueId = uid();
      } else {
        checkbox.type = 'checkbox';
        checkbox.name = i;
        checkbox.value = i;
        checkbox.classList.add(`question-${index}-checkbox`);
        checkbox.dataset.uniqueId = uid();
      }

      // Turn i into a string, because that's the format it's saved as.
      if (Object.values(getAnswer(index))?.includes(i.toString())) {
        checkbox.checked = true;
      }

      (async () => {
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

          let array = Array.from(checkboxes)
            .filter(chk => chk.checked == true)
            .map(chk => chk.value);

          console.log(array);
          saveAnswer(index, array);
        });
      })();

      (async () => {
        checkbox.addEventListener('change', function () {
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

          let array = Array.from(checkboxes)
            .filter(chk => chk.checked == true)
            .map(chk => chk.value);

          console.log(array);
          saveAnswer(index, array);
        });
      })();

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
      radio.classList.add(`question-${index}-radio`);

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
  const true_false_boxes = document.querySelectorAll(`.question-${index}-radio`);

  let array = Array.from(checkboxes)
    .filter(chk => chk.checked == true)
    .map(chk => chk.value);

  let true_false_array = Array.from(true_false_boxes)
    .filter(chk => chk.checked == true)
    .map(chk => chk.value);

  const selectedCount = array?.length || 0;
  const true_false_Selected = true_false_array?.length || 0;

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
    return true_false_Selected == 1;
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