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

  Edit the following code with caution, as it serves
  as the core functionality for creating and managing
  the quiz. Make only necessary changes and avoid altering
  critical logic to ensure smooth operation.


  I'm going to leave this in here so I can remember how I set everything up later on;
  The constants are editable, and any changes to them will afect any value referencing them.
  Since the massive rewrite (Oct. 25, 2024), any and all data is referenced using the DataManager
  class. This means all the Question Indices are held there, and automatically synced to every
  function.

*/



// Constants

const QUESTION_TYPE_MULTIPLE_CHOICE = 'multiple_choice';
const QUESTION_TYPE_TRUE_FALSE = 'true_false';

const DEFAULT_MINIMUM_SELECTION = 1;
const DEFAILT_REQUIRE_MAXIMUM_SELECTION = false;

const TOTAL_QUESTIONS = Object.keys(quizData).length;

const ALERT_SELECT_REQUIRED = 'Please select the required number of options.';

const ELEMENT_ID_NEXT_BUTTON = 'next-button';
const ELEMENT_ID_PREVIOUS_BUTTON = 'previous-button';
const ELEMENT_ID_SUBMIT_BUTTON = 'submit-button';

const ELEMENT_CLASS_QUESTION = 'question';
const ELEMENT_CLASS_OPTION = 'option';
const ELEMENT_CLASS_OPTIONS_CONTAINER = 'options';
const ELEMENT_CLASS_QUESTION_TEXT = 'question-text';
const ELEMENT_CLASS_IMAGE = 'image';
const ELEMENT_CLASS_STATUS = 'status';

const ELEMENT_CLASS_QUESTIONS_CONTAINER = 'questions-container';

const CONTAINER_MAX_HEIGHT = 40;


// Functions

class Maid {
  // A reference for any random helper functions.

  generateUniqueIdentifier() {
    return Date.now()
      .toString(36) + Math.random()
      .toString(36)
      .substr(2);
  }

  startTimer() {
    const START_TIME = Date.now();
  
    return function() {
      const ELAPSED_TIME = (Date.now() - START_TIME) / 1000;
      return Math.floor(ELAPSED_TIME);
    };
  }
}

const _Maid = new Maid();

class DataManager {
  // A reference for any data manipulation functions.

  constructor() {
    this.CURRENT_QUESTION_INDEX = 0;
    this.SELECTED_ANSWERS = {};
  }

  // Data Saving Functions

  saveAnswer(ANSWER) {
    const QUESTION_OBJECT = quizData[Object.keys(quizData)[this.CURRENT_QUESTION_INDEX]];

    if (QUESTION_OBJECT.type == QUESTION_TYPE_MULTIPLE_CHOICE) {
      if (this.SELECTED_ANSWERS[this.CURRENT_QUESTION_INDEX]) {
        this.SELECTED_ANSWERS[this.CURRENT_QUESTION_INDEX] = ANSWER;
      } else {
        if (typeof ANSWER == 'object') {
          this.SELECTED_ANSWERS[this.CURRENT_QUESTION_INDEX] = ANSWER;
        } else {
          this.SELECTED_ANSWERS[this.CURRENT_QUESTION_INDEX] = [ANSWER];
        }
      }
    } else if (QUESTION_OBJECT.type == QUESTION_TYPE_TRUE_FALSE) {
      this.SELECTED_ANSWERS[this.CURRENT_QUESTION_INDEX] = ANSWER;
    }
  }

  saveChapter() {
    localStorage.setItem('last-played', chapterNumber);
  }


  // Data Validation Functions

  getAnswer() {
    return this.SELECTED_ANSWERS[this.CURRENT_QUESTION_INDEX] || {};
  }

  getQuestionKey(DIRECTION) {
    return Object.keys(quizData)[this.CURRENT_QUESTION_INDEX];
  }

  question() {
    return this.CURRENT_QUESTION_INDEX + 1;
  }

  canProceedToNextQuestion() {
    const QUESTION_OBJECT = quizData[Object.keys(quizData)[this.CURRENT_QUESTION_INDEX]];
    const CHECKBOXES = document.querySelectorAll(`.question-${this.CURRENT_QUESTION_INDEX}-checkbox`);
    const RADIOS = document.querySelectorAll(`.question-${this.CURRENT_QUESTION_INDEX}-radio`);

    let CHECKBOX_ARRAY = Array.from(CHECKBOXES)
      .filter(CHK => CHK.checked == true)
      .map(CHK => CHK.value);

    let RADIO_ARRAY = Array.from(RADIOS)
      .filter(CHK => CHK.checked == true)
      .map(CHK => CHK.value);

    const CHECKBOX_SELECTED_COUNT = CHECKBOX_ARRAY?.length || 0;
    const RADIO_SELECTED_COUNT = RADIO_ARRAY?.length || 0;

    if (QUESTION_OBJECT.type == QUESTION_TYPE_MULTIPLE_CHOICE) {
      const LIMIT_SELECTION = QUESTION_OBJECT.data.limit_selection;

      if (typeof LIMIT_SELECTION == 'object') {
        const MINIMUM_SELECTION = LIMIT_SELECTION.minimum || DEFAULT_MINIMUM_SELECTION;
        const MAXIMUM_SELECTION = LIMIT_SELECTION.maximum || QUESTION_OBJECT.data.questions.length;
        const REQUIRE_MAXIMUM = LIMIT_SELECTION.require_maximum || DEFAILT_REQUIRE_MAXIMUM_SELECTION;

        if (CHECKBOX_SELECTED_COUNT >= MINIMUM_SELECTION && (CHECKBOX_SELECTED_COUNT <= MAXIMUM_SELECTION || !REQUIRE_MAXIMUM)) {
          this.saveAnswer(CHECKBOX_ARRAY);
          return true;
        } else if (CHECKBOX_SELECTED_COUNT == MAXIMUM_SELECTION && REQUIRE_MAXIMUM) {
          this.saveAnswer(CHECKBOX_ARRAY);
          return true;
        } else {
          return false;
        }
      } else if (typeof LIMIT_SELECTION == 'number') {
        return CHECKBOX_SELECTED_COUNT == LIMIT_SELECTION;
      }
    } else if (QUESTION_OBJECT.type == QUESTION_TYPE_TRUE_FALSE) {
      return RADIO_SELECTED_COUNT == 1;
    }

    // Default to prevent user from continuing, in case of spoofing values.
    return false;
  }
}

const _DataManager = new DataManager();

class Interface {
  // A reference for any DOM manipulation functions.

  adjustQuestionPosition() {
    const QUESTION_TEXT = document.querySelector(`#${ELEMENT_CLASS_QUESTION_TEXT}`);
    const TEXT_HEIGHT = QUESTION_TEXT.scrollHeight;
  
    if (TEXT_HEIGHT > CONTAINER_MAX_HEIGHT) {
      QUESTION_TEXT.style.marginTop = `${CONTAINER_MAX_HEIGHT - TEXT_HEIGHT}px`;
    } else {
      QUESTION_TEXT.style.marginTop = '0px';
    }
  }

  updateQuestionDisplay() {
    const QUESTION_TEXT = document.querySelector(`#${ELEMENT_CLASS_QUESTION_TEXT}`);
    QUESTION_TEXT.textContent = `${_DataManager.question()}. ${_DataManager.getQuestionKey()}`;
    this.adjustQuestionPosition();
  }

  updateStatusDisplay() {
    const STATUS_ELEMENT = document.querySelector(`.${ELEMENT_CLASS_STATUS}`);
    STATUS_ELEMENT.textContent = `${_DataManager.question()}/${TOTAL_QUESTIONS}`;
  }

  switchImage(IN_OR_OUT) {
    const IMAGE_ELEMENT = document.querySelector(`.${ELEMENT_CLASS_IMAGE}`);
    IMAGE_ELEMENT.classList.toggle('active', IN_OR_OUT);
    IMAGE_ELEMENT.classList.toggle('inactive', !IN_OR_OUT);  
  }

  updateButtons() {
    const PREVIOUS_BUTTON = document.querySelector(`#${ELEMENT_ID_PREVIOUS_BUTTON}`);
    const NEXT_BUTTON = document.querySelector(`#${ELEMENT_ID_NEXT_BUTTON}`);
    const SUBMIT_BUTTON = document.querySelector(`#${ELEMENT_ID_SUBMIT_BUTTON}`);

    _DataManager.CURRENT_QUESTION_INDEX == 0 ? PREVIOUS_BUTTON.style.display = 'none' : PREVIOUS_BUTTON.style.display = 'inline-block';
    _DataManager.CURRENT_QUESTION_INDEX == TOTAL_QUESTIONS - 1 ? NEXT_BUTTON.style.display = 'none' : NEXT_BUTTON.style.display = 'inline-block';
    _DataManager.CURRENT_QUESTION_INDEX == TOTAL_QUESTIONS - 1 ? SUBMIT_BUTTON.style.display = 'inline-block' : SUBMIT_BUTTON.style.display = 'none';
  }

  createElement(DATA) {
    const ELEMENT_ID = _Maid.generateUniqueIdentifier();

    const NEW_ELEMENT = document.createElement(DATA.tag_name);
    NEW_ELEMENT.dataset.uniqueId = ELEMENT_ID;

    for (let KEY in DATA) {
      if (DATA.hasOwnProperty(KEY)) {
          NEW_ELEMENT[KEY] = DATA[KEY];
      }
    }

    return NEW_ELEMENT;
  }

  displayQuestion() {
    const INDEX = _DataManager.CURRENT_QUESTION_INDEX;
    const QUESTIONS_CONTAINER = document.querySelector(`#${ELEMENT_CLASS_QUESTIONS_CONTAINER}`);
    QUESTIONS_CONTAINER.innerHTML = '';

    const QUESTION_KEY = Object.keys(quizData)[INDEX];
    const QUESTION_OBJECT = quizData[QUESTION_KEY];

    const QUESTION_ELEMENT = this.createElement({
      tag_name: 'div',
      className: ELEMENT_CLASS_QUESTION,
    });

    const OPTIONS_CONTAINER = this.createElement({
      tag_name: 'div',
      className: ELEMENT_CLASS_OPTIONS_CONTAINER,
    });

    QUESTION_OBJECT.data.image ? this.switchImage(true) : document.querySelector(`.${ELEMENT_CLASS_IMAGE}`).style.display = 'none';

    if (QUESTION_OBJECT.type === QUESTION_TYPE_MULTIPLE_CHOICE) {
      const LIMIT_SELECTION = QUESTION_OBJECT.data.limit_selection || {};
      const LIMIT = typeof LIMIT_SELECTION == 'number' ? LIMIT_SELECTION : LIMIT_SELECTION.maximum || null;
      const MINIMUM_SELECTION = LIMIT_SELECTION.minimum || DEFAULT_MINIMUM_SELECTION;
      const REQUIRE_MAX = LIMIT_SELECTION.require_maximum || DEFAILT_REQUIRE_MAXIMUM_SELECTION;

      let SELECTED_COUNT = Object.values(_DataManager.getAnswer())?.length || 0;

      QUESTION_OBJECT.data.questions.forEach((OPTION, I) => {
        const OPTION_ELEMENT = this.createElement({
          tag_name: 'div',
          className: ELEMENT_CLASS_OPTION,
        });

        const CHECKBOX = this.createElement({
          tag_name: 'input',
          type: LIMIT == 1 ? 'radio' : 'checkbox',
          name: I,
          value: I,
          className: `question-${INDEX}-checkbox`,
        });

        if (Object.values(_DataManager.getAnswer())?.includes(I.toString())) {
          CHECKBOX.checked = true;
        };

        (async () => {
          OPTION_ELEMENT.addEventListener('click', () => {
            CHECKBOX.checked = !CHECKBOX.checked;
  
            const CHECKBOXES = document.querySelectorAll(`.question-${INDEX}-checkbox`);
            let NEW_SELECTED_COUNT = Array.from(CHECKBOXES).filter(CHECK => CHECK.checked).length;
  
            if (LIMIT == 1) {
              CHECKBOXES.forEach(CHK => {
                if (CHK.dataset.uniqueId !== CHECKBOX.dataset.uniqueId) CHK.checked = false;
              });

              NEW_SELECTED_COUNT = 1;
            }
  
            // Enforce maximum selection limit
            if (LIMIT && NEW_SELECTED_COUNT > LIMIT) {
              CHECKBOX.checked = false;

              alert(`You can only select up to ${LIMIT} options.`);
              return;
            }
  
            let ARRAY = Array.from(CHECKBOXES)
              .filter(CHK => CHK.checked == true)
              .map(CHK => CHK.value);
  
            _DataManager.saveAnswer(ARRAY);
            SELECTED_COUNT = NEW_SELECTED_COUNT;
          });
        })();
  
        (async () => {
          CHECKBOX.addEventListener('change', () => {
            CHECKBOX.checked = !CHECKBOX.checked;
  
            const CHECKBOXES = document.querySelectorAll(`.question-${INDEX}-checkbox`);
            let NEW_SELECTED_COUNT = Array.from(CHECKBOXES).filter(CHK => CHK.checked).length;
  
            if (LIMIT == 1) {
              CHECKBOXES.forEach(CHK => {
                if (CHK.dataset.uniqueId !== CHECKBOX.dataset.uniqueId) CHK.checked = false;
              });

              NEW_SELECTED_COUNT = 1;
            }
  
            if (LIMIT && NEW_SELECTED_COUNT > LIMIT) {
              CHECKBOX.checked = false;
              alert(`You can only select up to ${LIMIT} options.`);

              return;
            }
  
            let ARRAY = Array.from(CHECKBOXES)
              .filter(CHK => CHK.checked == true)
              .map(CHK => CHK.value);
  
            _DataManager.saveAnswer(ARRAY);
            SELECTED_COUNT = NEW_SELECTED_COUNT;
          });
        })();

        const LABEL = this.createElement({
          tag_name: 'label',
          textContent: OPTION,
        });

        OPTION_ELEMENT.appendChild(CHECKBOX);
        OPTION_ELEMENT.appendChild(LABEL);
        OPTIONS_CONTAINER.appendChild(OPTION_ELEMENT);
      });

      QUESTION_ELEMENT.appendChild(OPTIONS_CONTAINER);
    } else if (QUESTION_OBJECT.type === QUESTION_TYPE_TRUE_FALSE) {
      ['True', 'False'].forEach((OPTION, I) => {
        const OPTION_ELEMENT = this.createElement({
          tag_name: 'div',
          className: ELEMENT_CLASS_OPTION,
        });

        const RADIO = this.createElement({
          tag_name: 'input',
          type: 'radio',
          name: `question-${INDEX}`,
          value: OPTION,
          className: `question-${INDEX}-radio`,
        });

        if (_DataManager.getAnswer() == (I + 1)) {
          RADIO.checked = true;
        };

        OPTION_ELEMENT.addEventListener('click', () => {
          RADIO.checked = true;
          _DataManager.saveAnswer((I + 1));
        });

        const LABEL = this.createElement({
          tag_name: 'label',
          textContent: OPTION,
        });

        OPTION_ELEMENT.appendChild(RADIO);
        OPTION_ELEMENT.appendChild(LABEL);
        OPTIONS_CONTAINER.appendChild(OPTION_ELEMENT);
      });

      QUESTION_ELEMENT.appendChild(OPTIONS_CONTAINER);
    };

    QUESTIONS_CONTAINER.appendChild(QUESTION_ELEMENT);
  }
}

const _Interface = new Interface();

class Grading {
  // A reference for any grading manipulation functions.

  // Data Grading Functions
  calculateWeightedGrade() {
    let CORRECT_ANSWERS = 0;
    let INCORRECT_ANSWERS = [];
    
    Object.keys(quizData).forEach((KEY, INDEX) => {
      let USER_ANSWER = _DataManager.SELECTED_ANSWERS[INDEX];
      let QUESTION_OBJECT = quizData[KEY];
      if (!USER_ANSWER || !QUESTION_OBJECT) return;

      if (QUESTION_OBJECT.type == QUESTION_TYPE_MULTIPLE_CHOICE) {
        const CORRECT_ANSWERS_ARRAY = QUESTION_OBJECT.data.answers;
        const USER_ANSWER_SET = new Set(USER_ANSWER.map((IDX) => QUESTION_OBJECT.data.questions[IDX]));
        const CORRECT_ANSWERS_SET = new Set(CORRECT_ANSWERS_ARRAY);

        if (USER_ANSWER_SET.size == CORRECT_ANSWERS_SET.size && [...USER_ANSWER_SET].every(ANSWER => CORRECT_ANSWERS_SET.has(ANSWER))) {
          CORRECT_ANSWERS++;
        } else {
          INCORRECT_ANSWERS.push(INDEX);
        }
      } else if (QUESTION_OBJECT.type == QUESTION_TYPE_TRUE_FALSE) {
        const CORRECT_ANSWER = QUESTION_OBJECT.data.answers[0];

        if (USER_ANSWER.toString() == CORRECT_ANSWER.toString()) {
          CORRECT_ANSWERS++;
        } else {
          INCORRECT_ANSWERS.push(INDEX);
        };
      };
    });

    return {
      score: CORRECT_ANSWERS,
      totalQuestions: TOTAL_QUESTIONS,
      incorrectAnswers: INCORRECT_ANSWERS,
    };
  }

  // Grading Maid Functions
  convertScoreToPercentageAndScale(CORRECT, OUT_OF) {
    if (OUT_OF == 0) return { percentage: 0, scale: 0 };
    let SCALE = CORRECT / OUT_OF;

    return {
      percentage: + (SCALE * 100).toFixed(2),
      scale: + SCALE.toFixed(4),
    }
  }

  isQuizPassed(CORRECT_ANSWERS) {
    let PERCENTAGE_CORRECT = (CORRECT_ANSWERS / TOTAL_QUESTIONS) * 100;
    return PERCENTAGE_CORRECT >= 80;
  }

  updateQuizStatistics(NEW_QUIZ_DATA) {
    let CHAPTER_ID = `chapter_${chapterNumber}`;
    let STORED_STATS = JSON.parse(localStorage.getItem('stats')) || {};
    let LAST_HAD_STATS = true;
  
    if (!STORED_STATS[CHAPTER_ID]) {
      LAST_HAD_STATS = false;

      STORED_STATS[CHAPTER_ID] = {
        quizzes: [],
        totalScore: 0,
        totalQuestions: TOTAL_QUESTIONS,
        totalAccuracy: 0,
        bestScore: 0,
        worstScore: NEW_QUIZ_DATA.missedQuestions.length,
        numQuizzes: 0,
        totalTimeSpent: 0,
        unlocked: false,
      };
    };
  
    let CHAPTER = STORED_STATS[CHAPTER_ID];
  
    if (!CHAPTER.unlocked && this.isQuizPassed(NEW_QUIZ_DATA.score)) {
      CHAPTER.unlocked = true;
    }
  
    CHAPTER.totalScore += NEW_QUIZ_DATA.score;
    CHAPTER.totalAccuracy += NEW_QUIZ_DATA.accuracy;
    CHAPTER.numQuizzes += 1;
    CHAPTER.totalTimeSpent += NEW_QUIZ_DATA.timeSpent;
  
    // Update best and worst scores if applicable
    CHAPTER.bestScore = Math.max(CHAPTER.bestScore, NEW_QUIZ_DATA.score);
    CHAPTER.worstScore = Math.min(CHAPTER.worstScore, NEW_QUIZ_DATA.score);
  
    CHAPTER.quizzes.push(NEW_QUIZ_DATA);
    localStorage.setItem('stats', JSON.stringify(STORED_STATS));
  }
}

// Initialize the Interface

const _Grading = new Grading();
const _GetElapsedTime = _Maid.startTimer();
let _Debounce = false;

document.querySelector(`#${ELEMENT_ID_NEXT_BUTTON}`).addEventListener('click', () => {
  if (_Debounce) return;
  _Debounce = true;

  if (!_DataManager.canProceedToNextQuestion()) {
    alert('Please select the required number of options.');
    _Debounce = false;
    return;
  };

  _Interface.switchImage(false);

  setTimeout(() => {
    if (_DataManager.CURRENT_QUESTION_INDEX < (TOTAL_QUESTIONS - 1)) {
      _DataManager.CURRENT_QUESTION_INDEX++;
      _Interface.updateButtons();
      _Interface.displayQuestion();
      _Interface.updateQuestionDisplay();
      _Interface.updateStatusDisplay();
      _Debounce = false;
    }
  }, 250)
});

document.querySelector(`#${ELEMENT_ID_PREVIOUS_BUTTON}`).addEventListener('click', () => {
  _Interface.switchImage(false);

  setTimeout(() => {
    if (_DataManager.CURRENT_QUESTION_INDEX > 0) {
      _DataManager.CURRENT_QUESTION_INDEX--;
      _Interface.updateButtons();
      _Interface.displayQuestion();
      _Interface.updateQuestionDisplay();
      _Interface.updateStatusDisplay();
    }
  }, 250)
});

document.querySelector(`#${ELEMENT_ID_SUBMIT_BUTTON}`).addEventListener('click', () => {
  const TIME_SPENT = _GetElapsedTime();
  const RESULT = _Grading.calculateWeightedGrade();
  const SCORE_CONVERTED = _Grading.convertScoreToPercentageAndScale(RESULT.score, RESULT.totalQuestions);

  _Grading.updateQuizStatistics({
    quizId: _Maid.generateUniqueIdentifier(),
    score: RESULT.score,
    accuracy: SCORE_CONVERTED.scale,
    missedQuestions: RESULT.incorrectAnswers,
    dateTaken: new Date().toISOString(),
    timeSpent: TIME_SPENT,
  });

  location.href = '/learningwithwick/practice/games/loading/';
});

_Interface.displayQuestion();
_Interface.updateButtons();
_Interface.updateQuestionDisplay();
_Interface.updateStatusDisplay();