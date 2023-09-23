<!DOCTYPE html>
<html lang="en">
<head>
  <!-- CSS styles as before -->
  <style>
    /* ... */
  </style>
</head>
<body>
  <!-- HTML content as before -->
  <script>
    function sendMessage() {
      const userMessage = document.getElementById('message-input').value;
      if (userMessage.trim() === '') return;

      const chatMessages = document.getElementById('chat-messages');

      // Create and append the user's message
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('message', 'user-message');
      userMessageElement.innerHTML = `<p>${userMessage}</p>`;
      chatMessages.appendChild(userMessageElement);

      // Simulate AI response (for demonstration purposes)
      const aiMessageElement = document.createElement('div');
      aiMessageElement.classList.add('message', 'ai-message');
      aiMessageElement.innerHTML = `<p>Thank you for your message: "${userMessage}". This is a simulated AI response.</p>`;
      chatMessages.appendChild(aiMessageElement);

      // Clear the user input
      document.getElementById('message-input').value = '';

      // Scroll to the bottom of the chat
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Listen for 'Enter' key press to send message
    document.getElementById('message-input').addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        sendMessage();
      }
    });
  </script>
</body>
</html>
