// TEXTOS
const titleText = "Se que hice esto una vez, pero aun te sigo amando como nunca 💗💗💗";
const text1 = "Si pudiera elegir el lugar mas seguro que conozco, siempre sería a tu lado. My beautiful wife <3333.";
const text2 = "Cada dia estando junto a ti es un dia inolvidable, que siempre voy a tener en mi corazón, ya que eres lo mas preciado de mi vida.";
const finalText = "— I Love You, My beautiful Woman 💗";

// EFECTO ESCRITURA
function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }

    typing();
}

// CONTADOR
function updateTime() {
    const startDate = new Date("2023-10-18T00:00:00"); // Cambia si quieres
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("time").innerHTML =
        `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateTime, 1000);

// MÚSICA
document.getElementById("playButton").addEventListener("click", function() {
    document.getElementById("music").play();
});

// CORAZÓN EN CANVAS
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function heartShape(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);
    return { x, y };
}

for (let i = 0; i < 1000; i++) {
    const t = Math.random() * Math.PI * 2;
    const pos = heartShape(t);

    particles.push({
        x: canvas.width / 2 + pos.x * 15,
        y: canvas.height / 2 - pos.y * 15,
        size: Math.random() * 2 + 1
    });
}

function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255,0,100,0.8)";

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(drawHeart);
}

drawHeart();

// INICIAR TODO
window.onload = function() {
    typeWriter("title", titleText, 40, function() {
        typeWriter("text1", text1, 25, function() {
            typeWriter("text2", text2, 25, function() {
                typeWriter("final", finalText, 40);
            });
        });
    });

    updateTime();
};
