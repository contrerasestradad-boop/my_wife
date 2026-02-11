// TEXTOS ORIGINALES
const titleText = "Se que hice esto una vez, pero aun te sigo amando como nunca 💗💗💗";
const text1 = "Si pudiera elegir el lugar mas seguro que conozco, siempre sería a tu lado. My beautiful wife <3333.";
const text2 = "Cada dia estando junto a ti es un dia inolvidable, que siempre voy a tener en mi corazón, ya que eres lo mas preciado de mi vida.";
const finalText = "— I Love You, My beautiful Woman 💗";

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
updateTime();

document.getElementById("playButton").addEventListener("click", function() {
    // Música
    const music = document.getElementById("music");
    music.play().catch(e => console.log("Error con audio:", e));
    
    // Abrir sobre
    document.getElementById("envelope").classList.remove("close");
    document.getElementById("envelope").classList.add("open");
    this.style.display = "none";

    // Esperar a que suba la carta para escribir
    setTimeout(() => {
        typeWriter("title", titleText, 45, () => {
            typeWriter("text1", text1, 30, () => {
                typeWriter("text2", text2, 30, () => {
                    typeWriter("final", finalText, 45);
                });
            });
        });
    }, 1000);
});
