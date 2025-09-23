// Show/hide chatbot when button clicked
document.getElementById("chatbot-toggle").addEventListener("click", function () {
  const chatbot = document.getElementById("chatbot-container");
  chatbot.style.display = (chatbot.style.display === "none") ? "block" : "none";
});

// Function to send message
function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userText = inputField.value.trim();
  if (!userText) return;

  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += `<p><b>You:</b> ${userText}</p>`;
  inputField.value = "";

  // Simple hardcoded responses (replace with API later)
  let botResponse = "Sorry, I don’t know that.";
  if (userText.toLowerCase().includes("who can donate")) {
    botResponse = "Anyone between 18–65 years, healthy, and above 50kg can donate blood.";
  } else if (userText.toLowerCase().includes("how often")) {
    botResponse = "You can donate whole blood every 3 months (men) or 4 months (women).";
  }

  chatLog.innerHTML += `<p><b>Bot:</b> ${botResponse}</p>`;
  chatLog.scrollTop = chatLog.scrollHeight; // auto scroll
}
