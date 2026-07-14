const API_KEY = "PUTAPIHERE";

async function askGemini() {
    const questionInput = document.getElementById("userQuestion");
    const responseBox = document.getElementById("response");

    const question = questionInput.value.trim();

    if (question === "") {
        responseBox.innerText = "Please type a question first.";
        return;
    }

    // Show thinking message.
    responseBox.innerText = "AstroBot is thinking...";

    // Start rocket game while AstroBot is loading.
    if (typeof startRocketGame === "function") {
        startRocketGame();
    }

    try {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${API_KEY}`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text:
`You are AstroBot, an educational astrophysics tutor for high school and introductory college students.

Only answer questions related to astrophysics, astronomy, physics, space science, or this website's learning modules.

If the question is unrelated, politely explain that AstroBot specializes in astrophysics and space science.

For relevant questions:
- Be scientifically accurate.
- Use clear, short paragraphs.
- Keep the answer concise unless more detail is necessary.
- Explain difficult vocabulary when helpful.
- Use bullet points only when they genuinely improve readability.
- Avoid raw JSON, code blocks, and unnecessary technical metadata.
- Write for a high-school or introductory-college audience.
- Do not use excessive headings or overly long answers.

Question: ${question}`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await res.json();

        console.log("Gemini status:", res.status);
        console.log("Gemini response:", data);

        // If the API returned an error.
        if (!res.ok || data.error) {

            if (typeof stopRocketGame === "function") {
                setTimeout(function () {
                    stopRocketGame();
                }, 3000);
            }

            console.error("Gemini API error:", data);

            responseBox.innerText =
                `AstroBot error ${res.status}: ` +
                (data.error?.message || "Unknown API error.");

            return;
        }

        // Extract AstroBot's successful answer.
        const answer =
            data.candidates?.[0]?.content?.parts
                ?.map(part => part.text || "")
                .join("\n")
                .trim();

        // Display the answer.
        if (answer) {
            displayFormattedAnswer(answer, responseBox);
        } else {
            responseBox.innerText =
                "AstroBot did not return an answer. Please try again.";
        }

        // Stop the rocket game after a short delay.
        if (typeof stopRocketGame === "function") {
            setTimeout(function () {
                stopRocketGame();
            }, 3000);
        }

    } catch (error) {
        console.error("AstroBot connection error:", error);

        if (typeof stopRocketGame === "function") {
            setTimeout(function () {
                stopRocketGame();
            }, 3000);
        }

        responseBox.innerText =
            "Something went wrong while connecting to AstroBot. Please try again.";
    }
}


function displayFormattedAnswer(answer, responseBox) {
    const safeAnswer = escapeHTML(answer);

    let formattedAnswer = safeAnswer
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>");

    const lines = formattedAnswer.split("\n");

    let html = "";
    let inList = false;

    for (const line of lines) {
        const trimmedLine = line.trim();

        if (trimmedLine === "") {
            if (inList) {
                html += "</ul>";
                inList = false;
            }

            continue;
        }

        if (
            trimmedLine.startsWith("- ") ||
            trimmedLine.startsWith("• ")
        ) {
            if (!inList) {
                html += "<ul>";
                inList = true;
            }

            html += `<li>${trimmedLine.substring(2)}</li>`;
        } else {
            if (inList) {
                html += "</ul>";
                inList = false;
            }

            html += `<p>${trimmedLine}</p>`;
        }
    }

    if (inList) {
        html += "</ul>";
    }

    responseBox.innerHTML = html;
}


function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


// Allow Enter key to submit a question.
document.addEventListener("DOMContentLoaded", function () {
    const questionInput = document.getElementById("userQuestion");

    if (questionInput) {
        questionInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                askGemini();
            }
        });
    }
});


window.askGemini = askGemini;