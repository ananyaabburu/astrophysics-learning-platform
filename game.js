let gameRunning = false;
let animationFrame;
let score = 0;

const keys = {
    left: false,
    right: false
};

function startRocketGame() {
    const gameBox = document.getElementById("rocketGame");
    const canvas = document.getElementById("gameCanvas");

    if (!gameBox || !canvas) {
        return;
    }

    gameBox.classList.remove("hidden");

    const context = canvas.getContext("2d");

    const rocket = {
        x: canvas.width / 2 - 15,
        y: canvas.height - 55,
        width: 30,
        height: 40,
        speed: 6
    };

    let asteroids = [];
    let frameCount = 0;

    score = 0;
    gameRunning = true;

    document.getElementById("gameScore").innerText = score;

    function createAsteroid() {
        asteroids.push({
            x: Math.random() * (canvas.width - 25),
            y: -25,
            width: 25,
            height: 25,
            speed: 2 + Math.random() * 3
        });
    }

    function collision(a, b) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }

    function drawRocket() {
        context.font = "34px Arial";
        context.fillText("🚀", rocket.x, rocket.y + 34);
    }

    function drawAsteroid(asteroid) {
        context.font = "28px Arial";
        context.fillText("☄️", asteroid.x, asteroid.y + 26);
    }

    function update() {
        if (!gameRunning) {
            return;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "#07162f";
        context.fillRect(0, 0, canvas.width, canvas.height);

        if (keys.left) {
            rocket.x -= rocket.speed;
        }

        if (keys.right) {
            rocket.x += rocket.speed;
        }

        rocket.x = Math.max(
            0,
            Math.min(canvas.width - rocket.width, rocket.x)
        );

        frameCount++;

        if (frameCount % 50 === 0) {
            createAsteroid();
        }

        for (const asteroid of asteroids) {
            asteroid.y += asteroid.speed;

            if (collision(rocket, asteroid)) {
                score = Math.max(0, score - 5);
                asteroid.y = canvas.height + 50;
            }

            drawAsteroid(asteroid);
        }

        asteroids = asteroids.filter(
            asteroid => asteroid.y < canvas.height + 30
        );

        if (frameCount % 30 === 0) {
            score++;
            document.getElementById("gameScore").innerText = score;
        }

        drawRocket();

        animationFrame = requestAnimationFrame(update);
    }

    update();
}

function stopRocketGame() {
    gameRunning = false;

    cancelAnimationFrame(animationFrame);

    const gameBox = document.getElementById("rocketGame");

    if (gameBox) {
        gameBox.classList.add("hidden");
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        keys.left = true;
    }

    if (event.key === "ArrowRight") {
        keys.right = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowLeft") {
        keys.left = false;
    }

    if (event.key === "ArrowRight") {
        keys.right = false;
    }
});

window.startRocketGame = startRocketGame;
window.stopRocketGame = stopRocketGame;