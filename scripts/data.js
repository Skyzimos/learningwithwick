const event = new CustomEvent('__share_data', {
    detail: {
        _production: true,
        _games_data: [
            {
                // Setup Info
                game_id: '1',
                type: 'English',
                name: 'English 10',

                // Read-Only Info
                description: 'Nouns, Verbs, and Adjectives',
                icon: 'fa-solid fa-book-open',
                tags: [''],
                developer: 'Jesse Martin',
                release_date: new Date('2024-12-04'),
            },
        ],
        _shared_data: {
            'Chapter1': {
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
            },
            'Chapter2': {
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
            },
            'Chapter3': {
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
            },
            'Chapter4': {
                'Explain the “Law” with regards to speed limits and conditions (Basic Speed Law):': {
                    type: 'multiple_choice',
                    data: {
                        limit_selection: {
                            minimum: 1,
                            maximum: 4,
                        },
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
                        limit_selection: {
                            minimum: 1,
                            maximum: 4,
                        },
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
                        limit_selection: 1,
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
            },
            'Chapter5': {
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
            },
        }
    }
});

document.dispatchEvent(event);