const messageForm = document.getElementById('messageForm');
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const messagesDiv = document.getElementById('messages');

messageForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = nameInput.value;
	const message = messageInput.value;

	fetch('http://localhost:5000/messages', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name: name, message: message })
	})
});

setInterval(function() {
    while (messagesDiv.firstChild) {
        messagesDiv.removeChild(messagesDiv.firstChild);
    }

    fetch('http://localhost:5000/messages')
    .then(response => response.json())
    .then(data => {
    data.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<span>${message.name}:</span><p>${message.message}</p>`;
    messagesDiv.appendChild(messageDiv);
    });
    });
}, 1000);