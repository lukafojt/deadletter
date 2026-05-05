document.querySelector(".letter-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const topic = document.getElementById("topic").value;
    const letter = document.getElementById("letter").value;

    const newEntry = {
        topic: topic,
        text: letter,
        date: new Date().toISOString()
    };

    const letters = JSON.parse(localStorage.getItem("deadletters")) || [];

    letters.push(newEntry);

    localStorage.setItem("deadletters", JSON.stringify(letters));

    window.location.href = "read.html";
});