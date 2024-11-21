// References
let Box2_BoxImage = document.querySelector('.flex-box:has(.box-2) > .box-image');
let Box2_BoxImageIcon = document.querySelector('.flex-box:has(.box-2) > .box-image > i');

let Box1_H3 = document.querySelector('.flex-box:has(.box-1) > .box-text > h3');
let Box2_H3 = document.querySelector('.flex-box:has(.box-2) > .box-text > h3');
let Box3_H3 = document.querySelector('.flex-box:has(.box-3) > .box-text > h3');

let MissedQuestions_InfoButton = document.querySelectorAll('.image-container');

let lastPlayed = localStorage.getItem('last-played');
let chapterId = 'chapter_' + lastPlayed;


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

        container.appendChild(newItem);
    });
}

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

MissedQuestions_InfoButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked')
    });
})