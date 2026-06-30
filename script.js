const API_KEY = "APIKEYHERE";

async function askGemini() {
    const question = document.getElementById("userQuestion").value;
    const responseBox = document.getElementById("response");

    responseBox.innerText = "Thinking...";

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
          text: question
        }]
      }]
    })
  }
);

    const data = await res.json();

    console.log("FULL RESPONSE:", data);

responseBox.innerText =
    JSON.stringify(data, null, 2);
}

window.askGemini = askGemini;