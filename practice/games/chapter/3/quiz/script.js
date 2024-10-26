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
      limit_selection: {
        minimum: 1,
        maximum: 4,
      },
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

_DataManager.saveChapter();
_Interface.displayQuestion();
_Interface.updateButtons();
_Interface.updateQuestionDisplay();
_Interface.updateStatusDisplay();