const form = document.querySelector(".letter-form")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const topic = document.getElementById("topic").value
  const content = document.getElementById("letter").value

  const { error } = await supabaseClient
    .from("letters")
    .insert([
      {
        topic: topic,
        content: content
      }
    ])

  if (error) {
    alert("failed to send letter")
    console.log(error)
  } else {
    alert("letter sent")
    form.reset()
  }
})