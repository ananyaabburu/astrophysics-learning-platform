
const ASTROBOT_API_URL =
  "https://astrobot-api.ananya-abburu.workers.dev";

async function askGemini() {
  const questionInput = document.getElementById("userQuestion");
  const responseBox = document.getElementById("response");

  if (!questionInput || !responseBox) {
    console.error("AstroBot input or response element not found.");
    return;
  }

  const question = questionInput.value.trim();

  if (!question) {
    responseBox.textContent = "Please type a question first.";
    return;
  }

  if (question.length > 500) {
    responseBox.textContent =
      "Please enter a question of 500 characters or fewer.";
    return;
  }

  responseBox.textContent = "AstroBot is thinking...";

  if (typeof startRocketGame === "function") {
    startRocketGame();
  }

  try {
    const res = await fetch(ASTROBOT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || `HTTP error ${res.status}`);
    }

    if (typeof data.answer === "string" && data.answer.trim()) {
      displayFormattedAnswer(data.answer, responseBox);
    } else {
      responseBox.textContent =
        "AstroBot did not return an answer. Please try again.";
    }

  } catch (error) {
    console.error("AstroBot connection error:", error);

    responseBox.textContent =
      "AstroBot couldn't answer right now. Please try again later.";

  } finally {
    if (typeof stopRocketGame === "function") {
      setTimeout(function () {
        stopRocketGame();
      }, 3000);
    }
  }
}

function displayFormattedAnswer(answer, responseBox) {
  const safeAnswer = escapeHTML(answer);

  const formattedAnswer = safeAnswer
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");

  const lines = formattedAnswer.split("\n");

  let html = "";
  let inList = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
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
