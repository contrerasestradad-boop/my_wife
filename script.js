// TEXTOS
const titleText = "Sé que hice esto una vez, pero aún te sigo amando como nunca 💗";
const text1 = "Si pudiera elegir el lugar más seguro que conozco, siempre sería a tu lado. My beautiful wife.";
const text2 = "Cada día junto a ti es un regalo inolvidable que guardo en mi corazón, eres lo más preciado de mi vida.";
const finalText = "— I Love You Forever 💗";

// EFECTO ESCRITURA
function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
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
        `${days} días, ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateTime, 1000);

// MÚSICA
document.getElementById("playButton").addEventListener("click", function() {
    const music = document.getElementById("music");
    music.play();
    this.style.display = "none"; // Oculta el botón tras dar click
});

// GENERAR EL ÁRBOL DE CORAZONES
const leavesContainer = document.getElementById("leaves");
const totalHearts = 100; // Más corazones para que se vea lleno

for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Posicionamiento en forma circular/corazón
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 120; // Radio de la copa del árbol
    const x = Math.cos(angle) * radius + 130; 
    const y = Math.sin(angle) * radius + 100;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    // Tamaños y tiempos aleatorios para naturalidad
    heart.style.fontSize = `${Math.random() * 15 + 10}px`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    heart.style.animationDuration = `${Math.random() * 2 + 2}s`;

    leavesContainer.appendChild(heart);
}

// INICIAR AL CARGAR
window.onload = function() {
    typeWriter("title", titleText, 50, () => {
        typeWriter("text1", text1, 30, () => {
            typeWriter("text2", text2, 30, () => {
                typeWriter("final", finalText, 50);
            });
        });
    });
    updateTime();
};
