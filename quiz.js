/* =========================================================
   ASTROPHYSICS LEARNING PLATFORM - QUIZ SYSTEM
   Handles Stars and Black Holes module quizzes.
   ========================================================= */


/* =========================================================
   STARS QUIZ
   ========================================================= */

const starsAnswers = {
    q1: {
        correct: "B",
        lesson: "Lesson 1 - What is a Star?",
        link: "stars.html#lesson1",
        explanation: "Stars are plasma because their temperatures are high enough for many electrons to separate from atomic nuclei, producing a gas of charged particles."
    },

    q2: {
        correct: "C",
        lesson: "Lesson 2 - Stellar Structure",
        link: "stars.html#lesson2",
        explanation: "Fusion occurs in the core because only the core reaches the extreme temperature and pressure required for hydrogen nuclei to fuse."
    },

    q3: {
        correct: "A",
        lesson: "Lesson 4 - Hydrostatic Equilibrium",
        link: "stars.html#lesson4",
        explanation: "Hydrostatic equilibrium is the balance between inward gravitational force and outward pressure from hot gas and radiation."
    },

    q4: {
        correct: "B",
        lesson: "Lesson 6 - Stellar Evolution",
        link: "stars.html#lesson6",
        explanation: "Massive stars have hotter cores, so fusion happens much faster. Even though they have more fuel, they burn through it more quickly."
    },

    q5: {
        correct: "D",
        lesson: "Lesson 5 - Stellar Classification",
        link: "stars.html#lesson5",
        explanation: "O-type stars are the hottest spectral class and appear blue because their surface temperatures are extremely high."
    },

    q6: {
        correct: "B",
        lesson: "Lesson 5 - Stellar Classification",
        link: "stars.html#lesson5",
        explanation: "The Sun is a G-type main-sequence star, meaning it is currently fusing hydrogen into helium in its core."
    },

    q7: {
        correct: "B",
        lesson: "Lesson 3 - Nuclear Fusion",
        link: "stars.html#lesson3",
        explanation: "Fusion releases energy because a small amount of mass is converted into energy according to E = mc²."
    },

    q8: {
        correct: "C",
        lesson: "Lesson 5 - Stellar Classification",
        link: "stars.html#lesson5",
        explanation: "On the H-R diagram, the upper-right region contains red giants and supergiants, which have relatively cool surfaces but very high luminosities."
    },

    q9: {
        correct: "A",
        lesson: "Lesson 6 - Stellar Evolution",
        link: "stars.html#lesson6",
        explanation: "A Sun-like star does not have enough mass to become a neutron star or black hole. After its red giant phase and planetary nebula stage, its remaining core becomes a white dwarf."
    },

    q10: {
        correct: "A",
        lesson: "Lesson 3 - Nuclear Fusion",
        link: "stars.html#lesson3",
        explanation: "Fusion requires extreme temperatures and pressures, which are found in the stellar core."
    }
};


function gradeStarsQuiz() {
    let score = 0;
    const total = Object.keys(starsAnswers).length;

    for (const questionName in starsAnswers) {
        const selected = document.querySelector(
            `input[name="${questionName}"]:checked`
        );

        const feedbackBox = document.getElementById(
            `feedback-${questionName}`
        );

        const answerInfo = starsAnswers[questionName];

        if (!feedbackBox) {
            console.error(
                `Missing feedback box for Stars question: ${questionName}`
            );
            continue;
        }

        feedbackBox.style.display = "block";

        if (selected && selected.value === answerInfo.correct) {
            score++;

            feedbackBox.className = "feedback correct";

            feedbackBox.innerHTML = `
                <b>Correct.</b><br><br>
                ${answerInfo.explanation}
            `;
        } else {
            const selectedAnswer = selected
                ? selected.value
                : "No answer selected";

            feedbackBox.className = "feedback incorrect";

            feedbackBox.innerHTML = `
                <b>Incorrect.</b><br>
                Your answer: ${selectedAnswer}<br>
                Correct answer: ${answerInfo.correct}<br><br>

                ${answerInfo.explanation}<br><br>

                <b>Recommended review:</b>
                <a href="${answerInfo.link}">
                    ${answerInfo.lesson}
                </a>
            `;
        }
    }

    const percent = Math.round((score / total) * 100);
    saveModuleProgress("stars", score, total);

    const scoreBox = document.getElementById("scoreBox");

    if (!scoreBox) {
        console.error("Could not find the Stars score box.");
        return;
    }

    scoreBox.style.display = "block";

    let message = "Keep reviewing the module and try again.";

    if (percent >= 90) {
        message =
            "Excellent work. You have a strong understanding of this module.";
    } else if (percent >= 70) {
        message =
            "Good progress. Review the missed topics to strengthen your understanding.";
    } else if (percent >= 50) {
        message =
            "You are building the foundation, but you should revisit several lessons.";
    }

    scoreBox.innerHTML = `
        <h2>Quiz Complete</h2>
        <p class="score">
            Score: ${score} / ${total} (${percent}%)
        </p>
        <p>${message}</p>
    `;

    scoreBox.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================================================
   BLACK HOLES QUIZ
   ========================================================= */

const blackHolesAnswers = {
    bh1: {
        correct: "B",
        lesson: "Lesson 1 - Gravity and Spacetime",
        link: "blackholes.html#lesson1",
        explanation: "According to general relativity, mass and energy curve spacetime. Objects move through this curved spacetime, producing what we experience as gravity."
    },

    bh2: {
        correct: "B",
        lesson: "Lesson 2 - Black Hole Formation",
        link: "blackholes.html#lesson2",
        explanation: "Fusion involving iron does not release energy that can support the stellar core against gravity. In a sufficiently massive star, the core can therefore collapse."
    },

    bh3: {
        correct: "C",
        lesson: "Lesson 3 - Black Hole Anatomy",
        link: "blackholes.html#lesson3",
        explanation: "The event horizon is the boundary beyond which light and other information cannot return to a distant observer."
    },

    bh4: {
        correct: "C",
        lesson: "Lesson 4 - Types of Black Holes",
        link: "blackholes.html#lesson4",
        explanation: "Most large galaxies are believed to contain supermassive black holes near their centers. These objects can have masses ranging from millions to billions of times the mass of the Sun."
    },

    bh5: {
        correct: "A",
        lesson: "Lesson 5 - Accretion and Jets",
        link: "blackholes.html#lesson5",
        explanation: "Matter in an accretion disk can become extremely hot because of processes including turbulence, compression, friction-like interactions, and magnetic effects. The hot material can emit enormous amounts of radiation."
    },

    bh6: {
        correct: "B",
        lesson: "Lesson 5 - Accretion and Jets",
        link: "blackholes.html#lesson5",
        explanation: "Relativistic jets are associated with the accretion disk and powerful magnetic fields surrounding a black hole. They do not emerge from inside the event horizon."
    },

    bh7: {
        correct: "A",
        lesson: "Lesson 6 - Detecting Black Holes",
        link: "blackholes.html#lesson6",
        explanation: "Astronomers can infer the existence of an unseen black hole by observing visible stars or gas orbiting an apparently empty region containing a large amount of mass."
    },

    bh8: {
        correct: "B",
        lesson: "Lesson 6 - Detecting Black Holes",
        link: "blackholes.html#lesson6",
        explanation: "When massive objects such as black holes accelerate and merge, they produce ripples in spacetime called gravitational waves."
    },

    bh9: {
        correct: "B",
        lesson: "Lesson 7 - Relativity and Time",
        link: "blackholes.html#lesson7",
        explanation: "From the perspective of a distant observer, gravitational time dilation makes an infalling object appear to slow as it approaches the event horizon, while its emitted light becomes increasingly redshifted."
    },

    bh10: {
        correct: "A",
        lesson: "Lesson 7 - Relativity and Time",
        link: "blackholes.html#lesson7",
        explanation: "Spaghettification results from extreme tidal forces. The side of an object closer to the black hole experiences stronger gravity than the farther side, stretching the object along the direction toward the black hole."
    }
};


function gradeBlackHolesQuiz() {
    let score = 0;
    const total = Object.keys(blackHolesAnswers).length;

    for (const questionName in blackHolesAnswers) {
        const selected = document.querySelector(
            `input[name="${questionName}"]:checked`
        );

        const feedbackBox = document.getElementById(
            `feedback-${questionName}`
        );

        const answerInfo = blackHolesAnswers[questionName];

        if (!feedbackBox) {
            console.error(
                `Missing feedback box for Black Holes question: ${questionName}`
            );
            continue;
        }

        feedbackBox.style.display = "block";

        if (selected && selected.value === answerInfo.correct) {
            score++;

            feedbackBox.className = "feedback correct";

            feedbackBox.innerHTML = `
                <b>Correct.</b><br><br>
                ${answerInfo.explanation}
            `;
        } else {
            const selectedAnswer = selected
                ? selected.value
                : "No answer selected";

            feedbackBox.className = "feedback incorrect";

            feedbackBox.innerHTML = `
                <b>Incorrect.</b><br>
                Your answer: ${selectedAnswer}<br>
                Correct answer: ${answerInfo.correct}<br><br>

                ${answerInfo.explanation}<br><br>

                <b>Recommended review:</b>
                <a href="${answerInfo.link}">
                    ${answerInfo.lesson}
                </a>
            `;
        }
    }

    const percent = Math.round((score / total) * 100);
    saveModuleProgress("blackHoles", score, total);

    const scoreBox = document.getElementById("blackHolesScoreBox");

    if (!scoreBox) {
        console.error("Could not find the Black Holes score box.");
        return;
    }

    scoreBox.style.display = "block";

    let message =
        "Review the recommended lessons and try the quiz again.";

    if (percent >= 90) {
        message =
            "Excellent work. You have a strong understanding of black-hole physics.";
    } else if (percent >= 70) {
        message =
            "Good work. Review the missed concepts to strengthen your understanding.";
    } else if (percent >= 50) {
        message =
            "You understand some of the major ideas, but several lessons should be reviewed.";
    }

    scoreBox.innerHTML = `
        <h2>Quiz Complete</h2>

        <p class="score">
            Score: ${score} / ${total} (${percent}%)
        </p>

        <p>${message}</p>
    `;

    scoreBox.scrollIntoView({
        behavior: "smooth"
    });
}
window.gradeStarsQuiz = gradeStarsQuiz;
window.gradeBlackHolesQuiz = gradeBlackHolesQuiz;
/* =========================================================
   GALAXIES QUIZ
   ========================================================= */

const galaxiesAnswers = {
    g1: {
        correct: "B",
        lesson: "Lesson 1 - What Is a Galaxy?",
        link: "galaxies.html#lesson1",
        explanation:
            "A galaxy is a gravitationally bound system containing stars, gas, dust, stellar remnants, and dark matter."
    },

    g2: {
        correct: "C",
        lesson: "Lesson 2 - Galaxy Classification",
        link: "galaxies.html#lesson2",
        explanation:
            "Elliptical galaxies usually contain less cold gas and dust than spiral galaxies, so they generally form fewer new stars."
    },

    g3: {
        correct: "B",
        lesson: "Lesson 3 - The Milky Way",
        link: "galaxies.html#lesson3",
        explanation:
            "The Solar System is located in the Milky Way's disk within a smaller structure called the Orion Spur."
    },

    g4: {
        correct: "A",
        lesson: "Lesson 4 - Dark Matter",
        link: "galaxies.html#lesson4",
        explanation:
            "Stars and gas in the outer regions of galaxies orbit faster than visible matter alone can explain, which suggests additional invisible mass."
    },

    g5: {
        correct: "B",
        lesson: "Lesson 5 - Galaxy Formation",
        link: "galaxies.html#lesson5",
        explanation:
            "Dark matter helped form gravitational structures that attracted ordinary gas, allowing stars and early galaxies to develop."
    },

    g6: {
        correct: "C",
        lesson: "Lesson 6 - Collisions and Mergers",
        link: "galaxies.html#lesson6",
        explanation:
            "Stars are extremely small compared with the enormous distances between them, so direct stellar collisions are rare during galaxy mergers."
    },

    g7: {
        correct: "A",
        lesson: "Lesson 6 - Collisions and Mergers",
        link: "galaxies.html#lesson6",
        explanation:
            "During a merger, gas clouds can become compressed, producing dense regions where new stars form rapidly."
    },

    g8: {
        correct: "B",
        lesson: "Lesson 7 - Active Galaxies",
        link: "galaxies.html#lesson7",
        explanation:
            "An active galactic nucleus is powered by matter heating up as it falls toward a supermassive black hole."
    },

    g9: {
        correct: "B",
        lesson: "Lesson 7 - Active Galaxies",
        link: "galaxies.html#lesson7",
        explanation:
            "Because light travels at a finite speed, light from very distant quasars shows us those objects as they existed billions of years ago."
    },

    g10: {
        correct: "C",
        lesson: "Lesson 2 - Galaxy Classification",
        link: "galaxies.html#lesson2",
        explanation:
            "A galaxy with a disk and central bulge but no prominent spiral arms is classified as a lenticular galaxy."
    }
};


function gradeGalaxiesQuiz() {
    let score = 0;
    const total = Object.keys(galaxiesAnswers).length;

    for (const questionName in galaxiesAnswers) {
        const selected = document.querySelector(
            `input[name="${questionName}"]:checked`
        );

        const feedbackBox = document.getElementById(
            `feedback-${questionName}`
        );

        const answerInfo = galaxiesAnswers[questionName];

        if (!feedbackBox) {
            console.error(
                `Missing feedback box for Galaxies question: ${questionName}`
            );
            continue;
        }

        feedbackBox.style.display = "block";

        if (selected && selected.value === answerInfo.correct) {
            score++;

            feedbackBox.className = "feedback correct";

            feedbackBox.innerHTML = `
                <b>Correct.</b><br><br>
                ${answerInfo.explanation}
            `;
        } else {
            const selectedAnswer = selected
                ? selected.value
                : "No answer selected";

            feedbackBox.className = "feedback incorrect";

            feedbackBox.innerHTML = `
                <b>Incorrect.</b><br>
                Your answer: ${selectedAnswer}<br>
                Correct answer: ${answerInfo.correct}<br><br>

                ${answerInfo.explanation}<br><br>

                <b>Recommended review:</b>
                <a href="${answerInfo.link}">
                    ${answerInfo.lesson}
                </a>
            `;
        }
    }

    const percent = Math.round((score / total) * 100);

    if (typeof saveModuleProgress === "function") {
        saveModuleProgress("galaxies", score, total);
    }

    const scoreBox = document.getElementById("galaxiesScoreBox");

    if (!scoreBox) {
        console.error("Could not find the Galaxies score box.");
        return;
    }

    scoreBox.style.display = "block";

    let message =
        "Review the recommended lessons and try again.";

    if (percent >= 90) {
        message =
            "Excellent work. You have a strong understanding of galaxies.";
    } else if (percent >= 70) {
        message =
            "Good work. Review the missed concepts to strengthen your understanding.";
    } else if (percent >= 50) {
        message =
            "You understand several key ideas, but some lessons should be reviewed.";
    }

    scoreBox.innerHTML = `
        <h2>Quiz Complete</h2>

        <p class="score">
            Score: ${score} / ${total} (${percent}%)
        </p>

        <p>${message}</p>
    `;

    scoreBox.scrollIntoView({
        behavior: "smooth"
    });
}

window.gradeGalaxiesQuiz = gradeGalaxiesQuiz;