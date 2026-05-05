const text = `you were not meant to find this.

this is where thoughts end up
when they never reach anyone.

the apology you rewrote
until it meant nothing.

the confession you never told.

the words that stayed in your throat
until they died there.

you can leave them here.

no names.
no replies.
no one will know.

just write it,

and let it be lost...
on purpose.`;

const el = document.getElementById("letterText");

let i = 0;

function getDelay(char) {
    if (char === "." && text.slice(i - 3, i) === "...") {
        return 800;
    }
    
    if (char === ".") return 500 + Math.random() * 200;
    if (char === ",") return 250 + Math.random() * 120;
    if (char === "\n") return 400;
    if (char === " ") return 30;

    return 30 + Math.random() * 60;
}

function writeLetter() {
    if (i >= text.length) return;

    const char = text[i];

    const span = document.createElement("span");
    span.textContent = char;

    el.appendChild(span);

    i++;

    setTimeout(writeLetter, getDelay(char));
}

window.addEventListener("DOMContentLoaded", () => {
    writeLetter();

el.addEventListener("click", () => {
    el.textContent = text;
    i = text.length;
});
});