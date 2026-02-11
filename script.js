// TUS TEXTOS ORIGINALES (NO CAMBIADOS)
const titleText = "Se que hice esto una vez, pero aun te sigo amando como nunca 💗💗💗";
const t1 = "Si pudiera elegir el lugar mas seguro que conozco, siempre sería a tu lado. My beautiful wife <3333.";
const t2 = "Cada dia estando junto a ti es un dia inolvidable, que siempre voy a tener en mi corazón, ya que eres lo mas preciado de mi vida.";
const finalText = "— I Love You, My beautiful Woman 💗";

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

function updateTime() {
    const startDate = new Date("2023-10-18T00:00:00");
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateTime, 1000);

document.getElementById("playButton").addEventListener("click", function() {
    document.getElementById("music").play();
    document.getElementById("envelope").classList.add("open");
    this.style.display = "none";
    
    // Iniciar escritura después de que se abra el sobre
    setTimeout(() => {
        typeWriter("title", titleText, 40, () => {
            typeWriter("text1", t1, 25, () => {
                typeWriter("text2", t2, 25, () => {
                    typeWriter("final", finalText, 40);
                });
            });
        });
    }, 800);
});

updateTime();
