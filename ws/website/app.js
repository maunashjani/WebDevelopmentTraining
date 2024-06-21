const socket = new WebSocket("ws://localhost:8080");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const messagesList = document.getElementById("messages");

socket.onopen = function(event) {
    console.log("Connection opened: ", event);
}

socket.onmessage = function(event) {
    if(typeof event.data == "string") {
        console.log(event.data);
        const messageItem = document.createElement("li");
        messageItem.textContent = event.data;

        messagesList.appendChild(messageItem);
    }
    else if(event.data instanceof Blob) {
        //blog logic
    }
};

socket.onerror = function(error) {
    console.error("WebSocket Error: ", error);
}

socket.onclose = function(event) {
    console.log("Connection closed", event);
}

sendButton.addEventListener("click", ()=> {
    const message = messageInput.value;

    if(message) {
        socket.send(message);
        messageInput.value = "";
    }
});

messageInput.addEventListener("keypress", (event) => {
    if(event.key == "Enter") {
        sendButton.click();
    }
});