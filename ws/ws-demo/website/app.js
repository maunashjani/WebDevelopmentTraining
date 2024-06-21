document.addEventListener('DOMContentLoaded', (event) => {
    const socket = new WebSocket('ws://localhost:8080');
    const editor = document.getElementById('editor');

    socket.onopen = function(event) {
        console.log('Connection opened:', event);
    };

    socket.onmessage = function(event) {
        const data = JSON.parse(event.data);
        if (data.type === 'update') {
            editor.value = data.content;
        }
    };

    socket.onerror = function(error) {
        console.error('WebSocket Error:', error);
    };

    socket.onclose = function(event) {
        console.log('Connection closed:', event);
    };

    editor.addEventListener('input', () => {
        const content = editor.value;
        socket.send(JSON.stringify({ type: 'update', content }));
    });
});
