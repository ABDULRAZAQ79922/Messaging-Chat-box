document.getElementById('send-button').addEventListener('click', sendMessage);

document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = messageText;

        const chatBody = document.getElementById('chat-body');
        chatBody.appendChild(messageElement);

        messageInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
