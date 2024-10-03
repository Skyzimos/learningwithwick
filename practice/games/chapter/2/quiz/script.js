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
      ]
      answers: [
        '1/16 inch'
      ]
    }
  },
  'It is not necessary to understand all indicators and gauges.': {
    type: 'true_false',
    data: {
      answers: [
        2'
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
  '': {
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
