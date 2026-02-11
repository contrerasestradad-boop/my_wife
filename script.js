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
    const startDate = new Date("2023-10-18T00:00:00");
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

// CREAR HOJAS EN FORMA DE CORAZÓN
const leaves = document.getElementById("leaves");

for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 280 + "px";
    heart.style.top = Math.random() * 280 + "px";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";

    leaves.appendChild(heart);
}

// INICIAR
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
