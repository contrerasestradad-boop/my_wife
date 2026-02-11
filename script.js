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

/* =========================
   Árbol (corazón)
   ========================= */
function insideHeart(x, y) {
  const a = x * x + y * y - 1;
  return (a * a * a - x * x * (y * y * y)) <= 0;
}

function buildHeartTree() {
  const leaves = document.querySelector(".tree-leaves");
  if (!leaves) return;

  leaves.innerHTML = "";

  const total = 130;
  const range = 1.35;

  for (let i = 0; i < total; i++) {
    let x, y, tries = 0;
    do {
      x = (Math.random() * 2 - 1) * range;
      y = (Math.random() * 2 - 1) * range;
      tries++;
    } while (!insideHeart(x / range, y / range) && tries < 400);

    const span = document.createElement("span");
    span.className = "tree-heart";
    span.textContent = "❤️";

    const left = ((x / range) + 1) * 50;
    const top  = (1 - (y / range)) * 50;

    const size = 14 + Math.random() * 14;
    span.style.left = `${left}%`;
    span.style.top = `${top}%`;
    span.style.fontSize = `${size}px`;
    span.style.animationDelay = `${Math.random() * 1.6}s`;
    span.style.opacity = `${0.78 + Math.random() * 0.22}`;
    leaves.appendChild(span);
  }

  const big = document.createElement("span");
  big.className = "tree-heart tree-heart-big";
  big.textContent = "❤️";
  big.style.left = "50%";
  big.style.top = "42%";
  leaves.appendChild(big);
}

/* =========================
   Hojas cayendo (del árbol)
   ========================= */
let leafInterval = null;

function createFallingLeaf() {
  const parent = document.querySelector(".tree-side");
  const canopy = document.querySelector(".tree-leaves");
  if (!parent || !canopy) return;

  const pr = parent.getBoundingClientRect();
  const cr = canopy.getBoundingClientRect();

  const leaf = document.createElement("span");
  leaf.className = "leaf";
  leaf.textContent = Math.random() < 0.20 ? "💗" : "❤️";

  const startLeft = (cr.left - pr.left) + Math.random() * cr.width;
  const startTop  = (cr.top - pr.top) + Math.random() * (cr.height * 0.25);

  leaf.style.left = `${startLeft}px`;
  leaf.style.top = `${startTop}px`;

  const size = 12 + Math.random() * 16;
  leaf.style.fontSize = `${size}px`;

  leaf.style.setProperty("--drift", `${(Math.random() * 160 - 80).toFixed(0)}px`);
  leaf.style.setProperty("--dur", `${(2.6 + Math.random() * 2.4).toFixed(2)}s`);
  leaf.style.setProperty("--spin", `${(Math.random() * 820 - 410).toFixed(0)}deg`);

  parent.appendChild(leaf);
  leaf.addEventListener("animationend", () => leaf.remove());
}

function startFallingLeaves() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (leafInterval) clearInterval(leafInterval);
  leafInterval = setInterval(createFallingLeaf, 240);
}

/* =========================
   CORAZONES FLOTANDO (FONDO)
   ========================= */
let bgHeartInterval = null;

function spawnBgHeart() {
  const h = document.createElement("span");
  h.className = "fx-heart";
  h.textContent = Math.random() < 0.25 ? "💗" : "❤️";

  const size = 14 + Math.random() * 30;
  h.style.fontSize = `${size}px`;
  h.style.left = `${Math.random() * 100}vw`;
  h.style.opacity = `${0.18 + Math.random() * 0.55}`;

  h.style.setProperty("--dx", `${(Math.random() * 160 - 80).toFixed(0)}px`);
  h.style.setProperty("--dur", `${(6 + Math.random() * 7).toFixed(2)}s`);
  h.style.setProperty("--rot", `${(Math.random() * 360 - 180).toFixed(0)}deg`);

  document.body.appendChild(h);
  h.addEventListener("animationend", () => h.remove());
}

function startBackgroundHearts() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (bgHeartInterval) return;

  // un pequeño “arranque”
  for (let i = 0; i < 10; i++) setTimeout(spawnBgHeart, i * 180);

  bgHeartInterval = setInterval(spawnBgHeart, 750);
}

/* =========================
   EXPLOSIÓN DE CORAZONES (OPEN)
   ========================= */
function burstHeartsAt(x, y) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const count = 26;
  for (let i = 0; i < count; i++) {
    const b = document.createElement("span");
    b.className = "burst-heart";
    b.textContent = Math.random() < 0.20 ? "💗" : "❤️";

    const size = 14 + Math.random() * 18;
    b.style.fontSize = `${size}px`;
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;

    // vector de salida
    const bx = (Math.random() * 320 - 160).toFixed(0) + "px";
    const by = (-(Math.random() * 260 + 60)).toFixed(0) + "px";
    const rot = (Math.random() * 720 - 360).toFixed(0) + "deg";
    const dur = (1.1 + Math.random() * 0.9).toFixed(2) + "s";

    b.style.setProperty("--bx", bx);
    b.style.setProperty("--by", by);
    b.style.setProperty("--rot", rot);
    b.style.setProperty("--dur", dur);

    document.body.appendChild(b);
    b.addEventListener("animationend", () => b.remove());
  }
}

/* =========================
   Abrir sobre + escribir
   ========================= */
const envelopeEl = document.getElementById("envelope");
const letterEl = document.getElementById("letter");
const playBtn = document.getElementById("playButton");
const music = document.getElementById("music");

let openedOnce = false;

function runTypingOnce() {
  if (openedOnce) return;
  openedOnce = true;

  setTimeout(() => {
    typeWriter("title", titleText, 45, () => {
      typeWriter("text1", text1, 30, () => {
        typeWriter("text2", text2, 30, () => {
          typeWriter("final", finalText, 45);
        });
      });
    });
  }, 850);
}

function openEnvelope() {
  if (envelopeEl.classList.contains("open")) return;

  // burst en el centro del sobre
  const r = envelopeEl.getBoundingClientRect();
  burstHeartsAt(r.left + r.width / 2, r.top + r.height * 0.35);

  envelopeEl.classList.remove("close");
  envelopeEl.classList.add("open");

  runTypingOnce();
  startFallingLeaves();

  setTimeout(() => {
    letterEl.classList.add("floating");
  }, 700);
}

// click/tap al sobre abre
envelopeEl.addEventListener("click", openEnvelope);

// botón: música + abre
playBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play().catch(e => console.log("Error con audio:", e));
  } else {
    music.pause();
  }
  openEnvelope();
});

document.addEventListener("DOMContentLoaded", () => {
  buildHeartTree();
  startBackgroundHearts();
});
buildHeartTree();
startBackgroundHearts();
