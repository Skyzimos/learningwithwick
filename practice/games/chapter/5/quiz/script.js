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

  Edit the following code with caution, as it serves
  as the core functionality for creating and managing
  the quiz. Make only necessary changes and avoid altering
  critical logic to ensure smooth operation.

  For later reference:

  Constants: All constants are editable, with any changes automatically updating all references throughout the code.
  DataManager Class: Since the major rewrite on Oct. 25, 2024, all data is managed through the DataManager class. This includes tracking all question indices and ensuring they sync seamlessly across every function.
  Hydrate Method in _Interface: The hydrate method is a favorite due to its simplicity and its huge impact on readability and maintainability. It organizes each event into four parts:
    
    - type: The type of element.
    - object: The targeted element’s name or query identifier.
    - event: The specific event triggering the function.
    - callback: The function that runs when the event is fired.

  It also manages threading, so you never have to worry about execution haulting because your code is yielding.
  Even though this structure adds some code length, it increases organization and makes the data structure easier to follow.

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
    this._Debounces = {};
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

  setDebounce(DATA) {
    this._Debounces[DATA.object] = DATA.state;
  }


  // Data Validation Functions

  getAnswer() {
    return this.SELECTED_ANSWERS[this.CURRENT_QUESTION_INDEX] || {};
  }

  getQuestionKey(DIRECTION) {
    return Object.keys(quizData)[this.CURRENT_QUESTION_INDEX];
  }

  question() {
    // Returns the current question index + 1.
    return this.CURRENT_QUESTION_INDEX + 1;
  }

  questionIndex() {
    // Returns the EXACT current question index.
    return this.CURRENT_QUESTION_INDEX;
  }

  getDebounce(OBJECT) {
    if (!this._Debounces[OBJECT]) this._Debounces[OBJECT] = false;
    return this._Debounces[OBJECT];
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

  // UI Event Functions

  hydrate(DATA) {
    const TYPES = {
      id: '#',
      class: '.',
    }

    const TAG = TYPES[DATA.type.toLowerCase()];
    const ELEMENT = typeof DATA.object == 'string' ? document.querySelector(`${TAG}${DATA.object}`) : DATA.object;
    
    (async () => {
      ELEMENT.addEventListener(DATA.event, DATA.callback);
    })();
  }

  
  // UI Updating Functions

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


  // UI Creation Functions

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

    typeof QUESTION_OBJECT.data.image == 'string' ? this.switchImage(true) : document.querySelector(`.${ELEMENT_CLASS_IMAGE}`).style.display = 'none';
    typeof QUESTION_OBJECT.data.image == 'string' ? document.querySelector(`.${ELEMENT_CLASS_IMAGE}`).src = '/learningwithwick' + questionObj.data.image : false;
    typeof QUESTION_OBJECT.data.image == 'string' ? document.querySelector(`.${ELEMENT_CLASS_IMAGE}`).style.display = 'block' : false;

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

        this.hydrate({
          type: 'CLASS',
          object: OPTION_ELEMENT,
          event: 'click',
          callback: () => {
            CHECKBOX.checked = !CHECKBOX.checked;

            const CHECKBOXES = document.querySelectorAll(`.question-${_DataManager.questionIndex()}-checkbox`);
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
          }
        })
  
        this.hydrate({
          type: 'CLASS',
          object: CHECKBOX,
          event: 'change',
          callback: () => {
            CHECKBOX.checked = !CHECKBOX.checked;

            const CHECKBOXES = document.querySelectorAll(`.question-${_DataManager.questionIndex}-checkbox`);
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
          }
        })

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

        this.hydrate({
          type: 'CLASS',
          object: OPTION_ELEMENT,
          event: 'click',
          callback: () => {
            RADIO.checked = true;
            _DataManager.saveAnswer(((RADIO.value == 'True' ? 1 : 2)));
          }
        });

        this.hydrate({
          type: 'CLASS',
          object: RADIO,
          event: 'click',
          callback: () => {
            RADIO.checked = true;
            _DataManager.saveAnswer(((RADIO.value == 'True' ? 1 : 2)));
          }
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

_Interface.hydrate({
  type: 'ID',
  object: ELEMENT_ID_NEXT_BUTTON,
  event: 'click',
  callback: () => {
    if (_DataManager.getDebounce(ELEMENT_ID_NEXT_BUTTON)) return;
    _DataManager.setDebounce({
      object: ELEMENT_ID_NEXT_BUTTON,
      state: true,
    });
  
    if (!_DataManager.canProceedToNextQuestion()) {
      alert('Please select the required number of options.');

      _DataManager.setDebounce({
        object: ELEMENT_ID_NEXT_BUTTON,
        state: false,
      });

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

        _DataManager.setDebounce({
          object: ELEMENT_ID_NEXT_BUTTON,
          state: false,
        });
      }
    }, 250)
  },
});

_Interface.hydrate({
  type: 'ID',
  object: ELEMENT_ID_PREVIOUS_BUTTON,
  event: 'click',
  callback: () => {
    if (_DataManager.getDebounce(ELEMENT_ID_PREVIOUS_BUTTON)) return;
    _DataManager.setDebounce({
      object: ELEMENT_ID_PREVIOUS_BUTTON,
      state: true,
    });

    _Interface.switchImage(false);

    setTimeout(() => {
      if (_DataManager.CURRENT_QUESTION_INDEX > 0) {
        _DataManager.CURRENT_QUESTION_INDEX--;
        _Interface.updateButtons();
        _Interface.displayQuestion();
        _Interface.updateQuestionDisplay();
        _Interface.updateStatusDisplay();

        _DataManager.setDebounce({
          object: ELEMENT_ID_PREVIOUS_BUTTON,
          state: false,
        });
      }
    }, 250)
  }
})

_Interface.hydrate({
  type: 'ID',
  object: ELEMENT_ID_SUBMIT_BUTTON,
  event: 'click',
  callback: () => {
    if (_DataManager.getDebounce(ELEMENT_ID_SUBMIT_BUTTON)) return;
    _DataManager.setDebounce({
      object: ELEMENT_ID_SUBMIT_BUTTON,
      state: true,
    });

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
  
    _DataManager.setDebounce({
      object: ELEMENT_ID_SUBMIT_BUTTON,
      state: false,
    });

    location.href = '/learningwithwick/practice/games/loading/';
  }
})

_DataManager.saveChapter();
_Interface.displayQuestion();
_Interface.updateButtons();
_Interface.updateQuestionDisplay();
_Interface.updateStatusDisplay();