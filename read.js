const lettersContainer = document.getElementById("lettersContainer")
const filter = document.getElementById("filter")

async function loadLetters(selectedTopic = "all") {
    let query = supabaseClient
        .from("letters")
        .select("*")
        .order("created_at", { ascending: false })

    if (selectedTopic !== "all") {
        query = query.eq("topic", selectedTopic)
    }

    const { data, error } = await query

    console.log("letters:", data)
    console.log("error:", error)

    lettersContainer.innerHTML = ""

    if (error) {
        lettersContainer.innerHTML = `<p style="text-align:center;">failed to load archive.</p>`
        return
    }

    if (!data || data.length === 0) {
        lettersContainer.innerHTML = `<p style="text-align:center;">no letters found</p>`
        return
    }

    data.forEach(letter => {
        const card = document.createElement("div")
        card.className = "letter-card"

        card.innerHTML = `
            <div class="topic">${letter.topic}</div>
            <div class="text">${letter.content}</div>
        `

        lettersContainer.appendChild(card)
    })
}

loadLetters()

filter.addEventListener("change", () => {
    loadLetters(filter.value)
})