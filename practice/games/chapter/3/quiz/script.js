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
      limit_selection: 4,
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
  'Which sign indicates that the road is slippery when wet?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/slippery road/',
      limit_selection: 3,
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
  'Which of the following signs warn of an upcoming railroad crossing?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/railroad crossing/',
      limit_selection: 4,
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
  'Which of the following signs indicates a school zone?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/school zone.jpg',
      limit_selection: 4,
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
  'Which of the following shaped signs indicates a no-passing zone?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/no passing zone.jpg',
      limit_selection: 1,
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
  'Which of these signs indicates that the divided highway is ending?': {
    type: 'multiple_choice',
    data: {
      image: '/media/quiz/images/3/divided highway/',
      limit_selection: 1,
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
        'It’s clear and safe.',
        'No pedestrians are present.',
      ],
      answers: [
        'Turning from a one way to another one way.',
      ]
    }
  },
  'Which of the following statements is true:': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
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

let currentQuestionIndex = 0;
let selectedAnswers = {};
const totalQuestions = Object.keys(quizData).length;

function displayQuestion(quizData, index) {
  const questionsContainer = document.getElementById('questions-container');
  questionsContainer.innerHTML = '';

  quizData = shuffleArray(quizData);
  const questionKey = Object.keys(quizData)[index];
  const questionObj = quizData[questionKey];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';

  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options';

  if (questionObj.data.image) {
    document.querySelector('.image').src = '/learningwithwick' + questionObj.data.image;
  } else {
        document.querySelector('.image').src = '';
  }

  if (questionObj.type === 'multiple_choice') {
    const limit = questionObj.data.limit_selection || null;
    let selectedCount = selectedAnswers[`question-${index + 1}`]?.length || 0;

    questionObj.data.questions.forEach((option, i) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'option';
      optionElement.style.cursor = 'pointer';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = `question-${index}`;
      checkbox.value = option;
      checkbox.classList.add(`question-${index}-checkbox`);
      checkbox.dataset.uniqueId = uid();

      if (selectedAnswers[`question-${index + 1}`]?.includes(option)) {
        checkbox.checked = true;
      }

      optionElement.addEventListener('click', function () {
        checkbox.checked = !checkbox.checked;

        const checkboxes = document.querySelectorAll(`.question-${index}-checkbox`);
        let selectedCount = Array.from(checkboxes).filter(chk => chk.checked).length;

        if (limit === 1) {
          checkboxes.forEach(chk => {
            console.log(chk.dataset.uniqueId, checkbox.dataset.uniqueId)
            if (chk.dataset.uniqueId !== checkbox.dataset.uniqueId) chk.checked = false;
          });
          selectedCount = 1;
        }

        if (limit && selectedCount > limit) {
          if (checkbox.checked == true) {
            checkbox.checked = false;
          } else {
            checkbox.checked = false;
            alert(`You can only select up to ${limit} options.`);
          }
          return;
        }

        selectedAnswers[`question-${index + 1}`] = Array.from(checkboxes)
          .filter(chk => chk.checked)
          .map(chk => chk.value);
      });

      const label = document.createElement('label');
      label.textContent = option;

      optionElement.appendChild(checkbox);
      optionElement.appendChild(label);
      optionsContainer.appendChild(optionElement);
    });

    questionElement.appendChild(optionsContainer);
  } else if (questionObj.type === 'true_false') {
    if (!selectedAnswers[`question-${index + 1}`]) {
      console.log('NO ANSWER')
      selectedAnswers[`question-${index + 1}`] = 0;
    }
    
    ['True', 'False'].forEach((option, i) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'option';
      optionElement.style.cursor = 'pointer';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question-${index}`;

      console.log(selectedAnswers[`question-${index + 1}`], (i + 1))
      if (selectedAnswers[`question-${index + 1}`] === (i + 1)) {
        radio.checked = true;
      }

      optionElement.addEventListener('click', function () {
        radio.checked = true;
        selectedAnswers[`question-${index + 1}`] = (i + 1);
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

  selectedAnswers[`question-${index + 1}`] = Array.from(checkboxes)
    .filter(chk => chk.checked)
    .map(chk => chk.value);

  if (questionObj.type === 'multiple_choice') {
    const limit = questionObj.data.limit_selection || null;
    const selected = selectedAnswers[`question-${index + 1}`]?.length || 0;
    console.log(selected, selectedAnswers, selectedAnswers[`question-${index + 1}`])
    return selected === limit;
  }
  
  return true;
}

document.getElementById('next-button').addEventListener('click', function () {
  if (!canProceed(quizData, currentQuestionIndex)) {
    alert('Please select the required number of options.');
    return;
  }
  
  if (currentQuestionIndex < Object.keys(quizData).length - 1) {
    currentQuestionIndex++;
    document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`
    updateButtons(currentQuestionIndex, totalQuestions);
    displayQuestion(quizData, currentQuestionIndex);
    const questionKey = Object.keys(quizData)[currentQuestionIndex];
    document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`
    updateDisplay(`${currentQuestionIndex + 1}. ${questionKey}`)
  }
});

document.getElementById('previous-button').addEventListener('click', function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`
    updateButtons(currentQuestionIndex, totalQuestions);
    displayQuestion(quizData, currentQuestionIndex);
    const questionKey = Object.keys(quizData)[currentQuestionIndex];
    updateDisplay(`${currentQuestionIndex + 1}. ${questionKey}`)
  }
});

document.getElementById('submit-button').addEventListener('click', function () {
  console.log('Selected Answers:', selectedAnswers);
  sessionStorage.setItem('item', JSON.stringify(selectedAnswers))
  location.href = '/learningwithwick/practice/games/loading/'
});

displayQuestion(quizData, currentQuestionIndex);
updateButtons(currentQuestionIndex, totalQuestions);
const questionKey = Object.keys(quizData)[currentQuestionIndex];
updateDisplay(`${currentQuestionIndex + 1}. ${questionKey}`)
document.querySelector('.status').textContent = `${currentQuestionIndex + 1}/${Object.keys(quizData).length}`
