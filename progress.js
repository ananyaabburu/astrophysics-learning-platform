function saveModuleProgress(moduleName, score, total) {
    const percent = Math.round((score / total) * 100);

    localStorage.setItem(`${moduleName}Score`, percent);

    if (percent >= 70) {
        localStorage.setItem(`${moduleName}Completed`, "true");
    }

    const bestScore =
        Number(localStorage.getItem(`${moduleName}BestScore`)) || 0;

    let xp = Number(localStorage.getItem("astroXP")) || 0;

    if (percent > bestScore) {
        xp += percent - bestScore;

        localStorage.setItem("astroXP", xp);
        localStorage.setItem(`${moduleName}BestScore`, percent);
    }

    updateBadges();
}

function updateBadges() {
    const starsCompleted =
        localStorage.getItem("starsCompleted") === "true";

    const blackHolesCompleted =
        localStorage.getItem("blackHolesCompleted") === "true";

    const galaxiesCompleted =
        localStorage.getItem("galaxiesCompleted") === "true";

    const completedCount = [
        starsCompleted,
        blackHolesCompleted,
        galaxiesCompleted
    ].filter(Boolean).length;

    if (completedCount >= 1) {
        localStorage.setItem("firstModuleBadge", "unlocked");
    }

    if (completedCount >= 2) {
        localStorage.setItem("spaceExplorerBadge", "unlocked");
    }

    if (completedCount >= 3) {
        localStorage.setItem("cosmicScholarBadge", "unlocked");
    }
}

function loadProgressDashboard() {
    const xpDisplay = document.getElementById("xpDisplay");

    if (!xpDisplay) {
        return;
    }

    const xp = Number(localStorage.getItem("astroXP")) || 0;

    const level = Math.floor(xp / 100) + 1;
    const xpInCurrentLevel = xp % 100;
    const xpPercent = xpInCurrentLevel;

    xpDisplay.innerText = `${xp} XP`;

    const xpBarFill = document.getElementById("xpBarFill");

    if (xpBarFill) {
        xpBarFill.style.width = `${xpPercent}%`;
    }

    const xpLevelText = document.getElementById("xpLevelText");

    if (xpLevelText) {
        xpLevelText.innerText =
            `Level ${level} — ${xpInCurrentLevel} / 100 XP`;
    }

    const starsScore = localStorage.getItem("starsScore");
    const blackHolesScore = localStorage.getItem("blackHolesScore");
    const galaxiesScore = localStorage.getItem("galaxiesScore");

    document.getElementById("starsProgress").innerText =
        starsScore ? `${starsScore}% quiz score` : "Not completed";

    document.getElementById("blackHolesProgress").innerText =
        blackHolesScore ? `${blackHolesScore}% quiz score` : "Not completed";

    document.getElementById("galaxiesProgress").innerText =
        galaxiesScore ? `${galaxiesScore}% quiz score` : "Not completed";

    const badges = [];

    if (localStorage.getItem("firstModuleBadge") === "unlocked") {
        badges.push("First Module");
    }

    if (localStorage.getItem("spaceExplorerBadge") === "unlocked") {
        badges.push("Space Explorer");
    }

    if (localStorage.getItem("cosmicScholarBadge") === "unlocked") {
        badges.push("Cosmic Scholar");
    }

    const badgeDisplay = document.getElementById("badgeDisplay");

    if (badges.length === 0) {
        badgeDisplay.innerText = "No badges yet";
    } else {
        badgeDisplay.innerHTML = badges
            .map(badge => `<span class="badge">${badge}</span>`)
            .join("");
    }
}
window.saveModuleProgress = saveModuleProgress;
window.loadProgressDashboard = loadProgressDashboard;