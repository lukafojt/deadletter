const container = document.getElementById("lettersContainer");
const filter = document.getElementById("filter");

function displayLetters(selectedTopic = "all") {
    const letters = JSON.parse(localStorage.getItem("deadletters")) || [];

    container.innerHTML = "";
    letters.forEach(entry => {
        if (selectedTopic === "all" || entry.topic === selectedTopic) {
            const div = document.createElement("div");
            div.classList.add("letter-card");
            
            div.innerHTML = `
                <p class="topic">${entry.topic}</p>
                <p class="text">${entry.text}</p>
            `;

            container.appendChild(div);
        }
    });
}

filter.addEventListener("change", () => {
    displayLetters(filter.value);
});

displayLetters();