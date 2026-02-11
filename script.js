// -------- CONTADOR --------
const startDate = new Date("2023-10-18 00:00:00"); // CAMBIA ESTA FECHA

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("time").innerHTML =
        `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateTime, 1000);
updateTime();


// -------- CORAZONES FONDO --------
function createBackgroundHearts() {
    const container = document.querySelector(".background-hearts");

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        container.appendChild(heart);
    }
}

createBackgroundHearts();


// -------- CORAZONES DEL ÁRBOL --------
function createTreeHearts() {
    const leaves = document.getElementById("leaves");

    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 180 + "px";
        heart.style.top = Math.random() * 100 + "px";

        leaves.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);

    }, 500);
}

createTreeHearts();


// -------- MÚSICA --------
const music = document.getElementById("music");
const button = document.getElementById("playButton");

button.addEventListener("click", () => {
    music.play();
    button.style.display = "none";
});

