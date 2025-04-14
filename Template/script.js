async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage(message, "user-message");
  input.value = "";

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    if (data.response) {
      appendMessage(data.response, "bot-message");
    } else {
      appendMessage("⚠️Sorry, something went wrong.", "bot-message");
    }
  } catch (err) {
    appendMessage("Error: Unable to reach server.", "bot-message");
  }
}

function appendMessage(text, className) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = className;
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

