/* Stars quiz grading script.
   This checks each answer, gives feedback, and recommends lessons to review. */

const starsAnswers = {
    q1: {
        correct: "B",
        lesson: "Lesson 1 — What is a Star?",
        link: "stars.html#lesson1",
        explanation: "Stars are plasma because their temperatures are high enough for many electrons to separate from atomic nuclei, producing a gas of charged particles."
    },
    q2: {
        correct: "C",
        lesson: "Lesson 2 — Stellar Structure",
        link: "stars.html#lesson2",
        explanation: "Fusion occurs in the core because only the core reaches the extreme temperature and pressure required for hydrogen nuclei to fuse."
    },
    q3: {
        correct: "A",
        lesson: "Lesson 4 — Hydrostatic Equilibrium",
        link: "stars.html#lesson4",
        explanation: "Hydrostatic equilibrium is the balance between inward gravitational force and outward pressure from hot gas and radiation."
    },
    q4: {
        correct: "B",
        lesson: "Lesson 6 — Stellar Evolution",
        link: "stars.html#lesson6",
        explanation: "Massive stars have hotter cores, so fusion happens much faster. Even though they have more fuel, they burn through it more quickly."
    },
    q5: {
        correct: "D",
        lesson: "Lesson 5 — Stellar Classification",
        link: "stars.html#lesson5",
        explanation: "O-type stars are the hottest spectral class and appear blue because their surface temperatures are extremely high."
    },
    q6: {
        correct: "B",
        lesson: "Lesson 5 — Stellar Classification",
        link: "stars.html#lesson5",
        explanation: "The Sun is a G-type main sequence star, meaning it is a yellow star currently fusing hydrogen into helium in its core."
    },
    q7: {
        correct: "B",
        lesson: "Lesson 3 — Nuclear Fusion",
        link: "stars.html#lesson3",
        explanation: "Fusion releases energy because a small amount of mass is converted into energy according to E = mc²."
    },
    q8: {
        correct: "C",
        lesson: "Lesson 5 — Stellar Classification",
        link: "stars.html#lesson5",
        explanation: "On the H-R diagram, the upper-right region contains red giants and supergiants, which are cool but very luminous."
    },
    q9: {
        correct: "A",
        lesson: "Lesson 6 — Stellar Evolution",
        link: "stars.html#lesson6",
        explanation: "A Sun-like star does not have enough mass to become a neutron star or black hole. It ends as a white dwarf."
    },
    q10: {
        correct: "A",
        lesson: "Lesson 3 — Nuclear Fusion",
        link: "stars.html#lesson3",
        explanation: "Fusion requires extreme temperatures and pressures, which are only found in the stellar core."
    }
};

function gradeStarsQuiz() {
    let score = 0;
    const total = Object.keys(starsAnswers).length;

    for (const questionName in starsAnswers) {
        const selected = document.querySelector(`input[name="${questionName}"]:checked`);
        const feedbackBox = document.getElementById(`feedback-${questionName}`);
        const answerInfo = starsAnswers[questionName];

        feedbackBox.style.display = "block";

        if (selected && selected.value === answerInfo.correct) {
            score++;
            feedbackBox.className = "feedback correct";
            feedbackBox.innerHTML =
                `<b>Correct.</b><br>${answerInfo.explanation}`;
        } else {
            feedbackBox.className = "feedback incorrect";

            let selectedText = selected ? selected.value : "No answer selected";

            feedbackBox.innerHTML =
                `<b>Incorrect.</b><br>
                Your answer: ${selectedText}<br>
                Correct answer: ${answerInfo.correct}<br><br>
                ${answerInfo.explanation}<br><br>
                Recommended review: <a href="${answerInfo.link}">${answerInfo.lesson}</a>`;
        }
    }

    const percent = Math.round((score / total) * 100);
    const scoreBox = document.getElementById("scoreBox");
    scoreBox.style.display = "block";

    let message = "Keep reviewing the module and try again.";
    if (percent >= 90) {
        message = "Excellent work. You have a strong understanding of this module.";
    } else if (percent >= 70) {
        message = "Good progress. Review the missed topics to strengthen your understanding.";
    } else if (percent >= 50) {
        message = "You are building the foundation, but you should revisit several lessons.";
    }

    scoreBox.innerHTML =
        `<h2>Quiz Complete</h2>
        <p class="score">Score: ${score} / ${total} (${percent}%)</p>
        <p>${message}</p>`;

    scoreBox.scrollIntoView({ behavior: "smooth" });
}
