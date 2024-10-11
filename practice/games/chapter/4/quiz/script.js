let chapterNumber = 4;
let quizData = {
  'Explain the “Law” with regards to speed limits and conditions (Basic Speed Law):': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'You can always drive the speed limit.',
        'You are fine going 5 mph over the speed limit.',
        'Weather conditions are the only factor to determine speed.',
        'You can only drive as fast as the conditions warrant.',
      ],
      answers: [
          'You can only drive as fast as the conditions warrant.',
        ]
    }
  },
  ' What is/are the danger(s) of driving too fast?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Serious injury or death is more likely.',
        'Your field of vision decreases.',
        'Easily lose control of the vehicle.',
        'All of the above.',
      ],
      answers: [
        'All of the above.',
      ]
    }
  },
  'Your peripheral vision decreases the faster you drive.': {
    type: 'true_false',
    data: {
      answers: [
        1,
      ]
    }
  },
  'What happens to a driver that approaches an intersection at an unlawful speed?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        'Must be drunk.',
        'Lose your right of way privileges.',
        'Accelerator must be stuck.',
        'You can\'t collect $200.',
      ],
      answers: [
        'Lose your right of way privileges.',
      ]
    }
  },
  'What is the maximum speed limit for an urban neighborhood?': {
    type: 'multiple_choice',
    data: {
      limit_selection: 1,
      questions: [
        '20 mph',
        '25 mph',
        '30 mph',
        '35 mph',
      ],
      answers: [
        '30 mph',
      ]
    }
  },
  'Additional fines will be charged if you are caught driving _____ mph or more over the posted speed limit.': {
    type: 'multiple_choice',
    data: {
      questions: [
        '10',
        '20',
        '30',
        '40',
      ].
      answers: [
        '20',
      ]
    }
  },
  'Drivers, who have passengers under what age are responsible to make sure they are buckled properly?': {
    type: 'multiple_choice',
    data: {
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
      limit_selection: 1,
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
      limit_selection: 1,
      questions: [
        'Reduce broadside accidents.',
        'Reduce rear end collisions.',
        'Reduce head on collisions.',
      ],
      answers: [
        'Reduce broadside accidents.',
      ]
    }
  }, // STOPPED HEREE
  'This sign indicates an added lane, merging is necessary.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/non added lane/',
      answers: [
        2,
      ]
    }
  },
  'This signs indicates an added lane, merging is necessary.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/added lane/',
      answers: [
        2,
      ]
    }
  },
  'This is an orange sign indicating a person with a flag ahead, no action necessary.': {
    type: 'true_false',
    data: {
      image: '/media/quiz/images/3/flag man/',
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
        'They ust yield to oncoming traffic/pedestrians as they have the right of way.',
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
      image: '/media/quiz/images/3/one car per green/',
      answers: [
        1
      ]
    }
  },
  'A white strobe light at a signalized intersection indicates that an emergency vehicle is approaching.': {
    type: 'true_false',
    data: {
      answers: {
        1,
      }
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
      image: '/media/quiz/images/3/car pass/',
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
