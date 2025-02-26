// WOODcraft
const container = document.querySelector(".container"),
      refreshBtn = document.querySelector(".refresh-btn");

const generatePalette = () => {
    container.innerHTML = "";  // পুরানো রং মুছে ফেলা

    for (let i = 0; i < 32; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;

        // ক্লিক করলে কালার কপি করা
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
};

// রঙের কোড কপি ফাংশন
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal.toUpperCase()).then(() => {
        colorElement.innerText = "Copied!";
        setTimeout(() => colorElement.innerText = hexVal, 1500);
    }).catch(() => alert("Failed to copy color code!"));
};

refreshBtn.addEventListener("click", generatePalette);
generatePalette();
