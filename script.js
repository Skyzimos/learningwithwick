// References
let Box2_BoxImage = document.querySelector('.flex-box:has(.box-2) > .box-image');
let Box2_BoxImageIcon = document.querySelector('.flex-box:has(.box-2) > .box-image > i');

let Box1_H3 = document.querySelector('.flex-box:has(.box-1) > .box-text > h3');
let Box2_H3 = document.querySelector('.flex-box:has(.box-2) > .box-text > h3');
let Box3_H3 = document.querySelector('.flex-box:has(.box-3) > .box-text > h3');

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
    let practiceAverage = (chapterData.totalScore / (chapterData.totalQuestions * chapterData.numQuizzes)) * 100;

    return {
        averageScore: averageScore.toFixed(2),
        averageAccuracy: averageAccuracy.toFixed(2),
        practiceAverage: practiceAverage,
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

try {
    Box1_H3.innerHTML = chapterStatistics.totalQuizzes;
    Box2_H3.innerHTML = chapterStatistics.practiceAverage + '%';
    Box3_H3.innerHTML = 'Chapter ' + lastPlayed;
} catch (error) {
    console.log('Error calculating statistics:', error);
}

try {
    let submit_username = document.querySelector('#submit-username');
    let submit_pfp = document.querySelector('#quit-modal');
    let pfp_container = document.querySelector('.profile-picture');
    let username = document.querySelector('#input');

    submit_username.addEventListener('click', function () {
        if (username.value.trim() === '' || username.value.trim().length < 3) {
            alert('Please enter a valid username with at least 3 characters.');
            return;
        }

        localStorage.setItem('username', username.value);
        localStorage.setItem('onboarding-completion', 1);
        document.getElementById('loading-overlay').classList.remove('fade-out')
        document.getElementById('loading-overlay').style.opacity = 0;
        document.getElementById('loading-overlay').style.display = 'block';
        document.getElementById('loading-overlay').classList.add('fade-in')

        setTimeout(() => {
            document.querySelector('.onboarding-username').classList.add('current_inactive');
            document.querySelector('.onboarding-pfp').classList.remove('current_inactive');
            document.getElementById('loading-overlay').classList.add('fade-out');

            setTimeout(() => {
                document.getElementById('loading-overlay').style.display = 'none';

                let animated = document.querySelectorAll('.animate-on-load');
                animated.forEach(element => {
                    element.classList.remove('animate-on-load');
                });
            }, 250)
        }, 1000)
    });

    const images = document.querySelectorAll('.pfps img');
    images.forEach((img) => {
        img.addEventListener('click', () => {
            images.forEach(i => {
                i.removeAttribute('data-clicked');
                i.classList.remove('active');
            });

            img.setAttribute('data-clicked', 'true');
            img.classList.add('active');
        });
    });

    submit_pfp.addEventListener('click', function () {
        const clickedImage = document.querySelector('.input-container.pfps img[data-clicked="true"]');
        if (!clickedImage) return;

        let clickedImageId = clickedImage.id;
        clickedImageId = clickedImageId.replace('pfp_', '');
        clickedImageId = clickedImageId.replace('?', '');
        clickedImageId = clickedImageId.replace(/cb=\d+/, '');
        localStorage.setItem('pfp', clickedImageId);
        localStorage.setItem('onboarding-completion', 2);
        document.getElementById('loading-overlay').classList.remove('fade-out')
        document.getElementById('loading-overlay').style.opacity = 0;
        document.getElementById('loading-overlay').style.display = 'block';
        document.getElementById('loading-overlay').classList.add('fade-in');

        setTimeout(() => {
            document.querySelector('.modal-container').style.display = 'none';
            document.querySelector('.profile-picture').src = localStorage.getItem('pfp');
            document.querySelectorAll('.data-username').forEach(element => {
                element.textContent = localStorage.getItem('username') + '!';
            });
            document.getElementById('loading-overlay').classList.add('fade-out');

            setTimeout(() => {
                document.getElementById('loading-overlay').style.display = 'none';

                let animated = document.querySelectorAll('.animate-on-load');
                animated.forEach(element => {
                    element.classList.remove('animate-on-load');
                });
            }, 250)
        }, 1000)
    });

    pfp_container.addEventListener('click', function () {
        document.getElementById('loading-overlay').classList.remove('fade-out')
        document.getElementById('loading-overlay').style.opacity = 0;
        document.getElementById('loading-overlay').style.display = 'block';
        document.getElementById('loading-overlay').classList.add('fade-in');

        setTimeout(() => {
            document.querySelector('.modal-container').style.display = 'flex';
            document.querySelector('.onboarding-username').classList.add('current_inactive');
            document.querySelector('.onboarding-pfp').classList.remove('current_inactive');
            document.getElementById('loading-overlay').classList.add('fade-out');

            setTimeout(() => {
                document.getElementById('loading-overlay').style.display = 'none';

                let animated = document.querySelectorAll('.animate-on-load');
                animated.forEach(element => {
                    element.classList.remove('animate-on-load');
                });
            }, 250)
        }, 1000)
    });

    document.querySelector('.profile-picture').src = localStorage.getItem('pfp');
    document.querySelectorAll('.data-username').forEach(element => {
        element.textContent = localStorage.getItem('username') + '!';
    });
} catch (error) {
    console.log('Error handling username submission:', error);
}