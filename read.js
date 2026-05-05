const container = document.getElementById("lettersContainer")
const filter = document.getElementById("filter")

async function displayLetters(selectedTopic = "all") {
  let query = supabaseClient
    .from("letters")
    .select("*")
    .order("created_at", { ascending: false })

  if (selectedTopic !== "all") {
    query = query.eq("topic", selectedTopic)
  }

  const { data, error } = await query

  if (error) {
    console.log(error)
    container.innerHTML = "<p>failed to load archive.</p>"
    return
  }

  container.innerHTML = ""

  data.forEach(entry => {
    const div = document.createElement("div")
    div.classList.add("letter-card")

    div.innerHTML = `
      <p class="topic">${entry.topic}</p>
      <p class="text">${entry.content}</p>
    `

    container.appendChild(div)
  })
}

filter.addEventListener("change", () => {
  displayLetters(filter.value)
})

displayLetters()