/*

  Flags:

    - limit_selection:
        Limits the number of selected answers to the specified numbers.
        Type: table OR number (When type is number, it defaults to minmax, with require_maximum true.)
        Defaults: no_limit
        Format: {
          limit_selection: {
            minimum,          <-- NUMBER: Minimum required selections. Optional
            maximum,          <-- NUMBER: Maximum allowed selections. (Optional)
            require_maximum   <-- BOOLEAN: Whether the user can continue without selecting the maximum selections or not.
          }
        }

*/

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
  'What is/are the danger(s) of driving too fast?': {
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
      ],
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
      limit_selection: 1,
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
      limit_selection: 1,
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
      limit_selection: 1,
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
      limit_selection: 1,
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
      limit_selection: 1,
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
