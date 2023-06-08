const io = require('socket.io')(8000)


const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', amit => {
        console.log("New user", amit);
        users[socket.id] = amit;
        socket.broadcast.emit('user-joined', amit);
    });
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
    });
})