const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let editorContent = '';

server.on('connection', socket => {
    console.log('Client connected');

    socket.send(JSON.stringify({ type: 'update', content: editorContent }));

    socket.on('message', message => {
        const data = JSON.parse(message);

        if (data.type === 'update') {
            editorContent = data.content;
            
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'update', content: editorContent }));
                }
            });
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });

    socket.on('error', error => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');