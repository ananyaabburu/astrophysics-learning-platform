const API_KEY = "PASTEAPIKEY";

async function askGemini() {
    const question = document.getElementById("userQuestion").value;
    const responseBox = document.getElementById("response");

    if (question.trim() === "") {
        responseBox.innerText = "Please type a question first.";
        return;
    }

    responseBox.innerText = "Thinking...";

    try {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: "You are AstroBot, an astrophysics tutor for high school and introductory college students. Answer clearly, use short paragraphs, and avoid overly long responses.\n\nQuestion: " + question
                        }]
                    }]
                })
            }
        );

        const data = await res.json();

        console.log("FULL RESPONSE:", data);

        if (data.error) {
            responseBox.innerText =
                "AstroBot is temporarily unavailable because the Gemini API is experiencing high demand. Please try again in a few minutes.";
            return;
        }

        responseBox.innerText =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response received.";

    } catch (error) {
        console.log(error);

        responseBox.innerText =
            "Something went wrong while connecting to AstroBot. Please try again.";
    }
}

window.askGemini = askGemini;