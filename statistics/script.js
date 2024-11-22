// References
let Box2_BoxImage = document.querySelector('.flex-box:has(.box-2) > .box-image');
let Box2_BoxImageIcon = document.querySelector('.flex-box:has(.box-2) > .box-image > i');

let Box1_H3 = document.querySelector('.flex-box:has(.box-1) > .box-text > h3');
let Box2_H3 = document.querySelector('.flex-box:has(.box-2) > .box-text > h3');
let Box3_H3 = document.querySelector('.flex-box:has(.box-3) > .box-text > h3');
let MissedQuestions_Modal = document.querySelector('.missed-answer-modal');

//localStorage.setItem('stats', `{"chapter_1":{"quizzes":[{"quizId":"m2mp6sy8uibwkhjphqp","score":22,"accuracy":0.9565,"missedQuestions":[15],"dateTaken":"2024-10-24T02:42:18.512Z","timeSpent":175},{"quizId":"m3rf6eh9wq3lfbm86qa","score":22,"accuracy":0.9565,"missedQuestions":[22],"dateTaken":"2024-11-21T14:40:36.813Z","timeSpent":466}],"totalScore":44,"totalQuestions":23,"totalAccuracy":1.913,"bestScore":22,"worstScore":1,"numQuizzes":2,"totalTimeSpent":641,"unlocked":true},"chapter_2":{"quizzes":[{"quizId":"m2o4qi9cg4luqz7xyrm","score":21,"accuracy":0.913,"missedQuestions":[16,20],"dateTaken":"2024-10-25T02:45:18.192Z","timeSpent":235},{"quizId":"m2o4y3gaglb7rxxhfz","score":21,"accuracy":0.913,"missedQuestions":[16,20],"dateTaken":"2024-10-25T02:51:12.250Z","timeSpent":95}],"totalScore":42,"totalQuestions":23,"totalAccuracy":1.826,"bestScore":21,"worstScore":2,"numQuizzes":2,"totalTimeSpent":330,"unlocked":true},"chapter_5":{"quizzes":[{"quizId":"m3rny991nhuxaquj3ea","score":15,"accuracy":0.375,"missedQuestions":[0,1,4,5,6,8,9,10,11,12,13,16,17,19,20,21,22,24,25,30,32,33,34,36,37],"dateTaken":"2024-11-21T18:46:13.333Z","timeSpent":76}],"totalScore":15,"totalQuestions":40,"totalAccuracy":0.375,"bestScore":15,"worstScore":15,"numQuizzes":1,"totalTimeSpent":76,"unlocked":false}}`)
//localStorage.setItem('last-played', 5)
let lastPlayed = localStorage.getItem('last-played');
let chapterId = 'chapter_' + lastPlayed;
let shared_data

document.addEventListener('__share_data', (__shared_data) => {
    shared_data = __shared_data.detail._shared_data;
})


// Functions

function getChapterData() {
    let storedStats = JSON.parse(localStorage.getItem('stats')) || {};
    return storedStats[chapterId] || null;
}

function calculateChapterStatistics() {
    let chapterData = getChapterData();

    if (!chapterData) {
        console.log("No data available for this chapter.");
        return null;
    }

    let averageScore = chapterData.totalScore / chapterData.numQuizzes;
    let averageAccuracy = chapterData.totalAccuracy / chapterData.numQuizzes;

    return {
        averageScore: averageScore.toFixed(2),
        averageAccuracy: averageAccuracy.toFixed(2),
        bestScore: chapterData.bestScore,
        worstScore: chapterData.worstScore,
        totalQuizzes: chapterData.numQuizzes,
        totalTimeSpent: chapterData.totalTimeSpent
    };
}

function getBestAndWorstQuizzes() {
    let chapterData = getChapterData();

    if (!chapterData) {
        console.log("No data available for this chapter.");
        return null;
    }

    let bestQuiz = chapterData.quizzes.reduce((best, current) =>
        current.score > best.score ? current : best
        , chapterData.quizzes[0]);

    let worstQuiz = chapterData.quizzes.reduce((worst, current) =>
        current.score < worst.score ? current : worst
        , chapterData.quizzes[0]);

    return { bestQuiz, worstQuiz };
}

function calculatePerformanceImprovement() {
    let chapterData = getChapterData();

    if (!chapterData || chapterData.quizzes.length < 2) {
        console.log("Not enough data to calculate improvement.");
        return {
            accuracyImprovement: 'Insufficient Data'
        };
    }

    let firstQuiz = chapterData.quizzes[0];
    let lastQuiz = chapterData.quizzes[chapterData.quizzes.length - 1];

    let scoreImprovement = ((lastQuiz.score - firstQuiz.score) / firstQuiz.score) * 100;
    let accuracyImprovement = ((lastQuiz.accuracy - firstQuiz.accuracy) / firstQuiz.accuracy) * 100;

    return {
        scoreImprovement: scoreImprovement.toFixed(2) + "%",
        accuracyImprovement: accuracyImprovement.toFixed(2) + "%"
    };
}

function calculateCommonlyMissedQuestions() {
    let chapterData = getChapterData();

    if (!chapterData) {
        return [];
    }

    let missedQuestionsCount = {};

    chapterData.quizzes.forEach(quiz => {
        quiz.missedQuestions.forEach(questionId => {
            missedQuestionsCount[questionId] = (missedQuestionsCount[questionId] || 0) + 1;
        });
    });

    let mostMissed = Object.entries(missedQuestionsCount).sort((a, b) => b[1] - a[1]);
    return mostMissed;
}

function convertToRoundedMinutes(seconds) {
    const minutes = seconds / 60;
    const roundedMinutes = Math.round(minutes); // Round to nearest minute
    const comparison = Math.sign(minutes - roundedMinutes); // Get the sign of the difference

    let comparisonString = '';
    if (comparison < 0) {
        comparisonString = `< ${roundedMinutes} Minutes`;
    } else if (comparison > 0) {
        comparisonString = `< ${roundedMinutes + 1} Minutes`;
    } else {
        comparisonString = `${roundedMinutes} Minutes`;
    }

    return {
        roundedMinutes,
        comparisonString
    };
}

function showModal() {
  MissedQuestions_Modal.classList.remove('modal-inactive', 'modal-closing');
  MissedQuestions_Modal.classList.add('modal-active');
}

function closeModal() {
    MissedQuestions_Modal.classList.add('modal-closing');
    MissedQuestions_Modal.addEventListener(
    'animationend',
    () => {
        MissedQuestions_Modal.classList.remove('modal-active', 'modal-closing');
        MissedQuestions_Modal.classList.add('modal-inactive');
    },
    { once: true }
  );
}

function populateMissedQuestions() {
    let mostMissedQuestions = calculateCommonlyMissedQuestions();
    let numberOfMissedQuestions = mostMissedQuestions.length;
    const container = document.querySelector('.missed-questions-item-container');
    const sampleItem = document.querySelector('.missed-questions.sample-item');

    document.querySelector('.bottom-flex-box:has(.box-4) > .bottom-box-text > h3').innerHTML = `${numberOfMissedQuestions} Total`;
    mostMissedQuestions.forEach(([questionId, missedCount]) => {
        let newItem = sampleItem.cloneNode(true);
        newItem.classList.remove('sample-item');
        newItem.querySelector('.times-container > h1').textContent = `${missedCount}x`;
        newItem.querySelector('.missed-questions-flex-text > h2').textContent = `#${Number(questionId) + 1}`;
        newItem.dataset.questionId = `${Number(questionId)}`;

        container.appendChild(newItem);
    });

    let MissedQuestions_InfoButton = document.querySelectorAll('.image-container');
    let Title = document.querySelector('.mam-title');
    let Answer = document.querySelector('.mam-answer');

    MissedQuestions_InfoButton.forEach(button => {
        button.addEventListener('click', () => {
            let questionId = button.parentElement.parentElement.dataset.questionId;

            if (lastPlayed == 6) {
                let data = JSON.parse(sessionStorage.getItem('chapter6_data'));
                console.log(data)
                Title.innerHTML = `${Number(questionId) + 1}. ${Object.keys(data)[questionId]}`;
                Answer.innerHTML = `Correct Answer: ${Object.values(data)[questionId].data.answers.map(answer => answer === 1 ? 'True' : answer === 2 ? 'False' : answer)
                        .join(', ')
                    }`;
            } else {
                Title.innerHTML = `${Number(questionId) + 1}. ${Object.keys(shared_data['Chapter' + lastPlayed])[questionId]}`;
                Answer.innerHTML = `Correct Answer: ${Object.values(shared_data['Chapter' + lastPlayed])[questionId].data.answers.map(answer => answer === 1 ? 'True' : answer === 2 ? 'False' : answer)
                    .join(', ')
                    }`;
            }

            showModal();
        });
    })
}

document.querySelector('.okay-button').addEventListener('click', () => {
    closeModal();
})

let chapterStatistics = calculateChapterStatistics();
let performanceChanges = calculatePerformanceImprovement();

if (!performanceChanges.accuracyImprovement.includes('-')) {
    Box2_BoxImage.style.backgroundColor = '#E1FFD6';
    Box2_BoxImageIcon.style.color = '#67F135';
    Box2_BoxImageIcon.className = 'fa-solid fa-up-long';
} else {
    Box2_BoxImage.style.backgroundColor = '#FFC7C7';
    Box2_BoxImageIcon.style.color = '#FE3E3E';
    Box2_BoxImageIcon.className = 'fa-solid fa-down-long';
}

try {
    Box1_H3.innerHTML = chapterStatistics.totalQuizzes;
    Box2_H3.innerHTML = performanceChanges.accuracyImprovement;
    Box3_H3.innerHTML = convertToRoundedMinutes((chapterStatistics.totalTimeSpent / chapterStatistics.totalQuizzes)).comparisonString;
    populateMissedQuestions();
} catch (error) {
    console.log('Error calculating statistics:', error);
}