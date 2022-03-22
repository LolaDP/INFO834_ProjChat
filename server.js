const mongoose = require('mongoose');
const Msg = require('./models/messages');
const User = require('./models/user');
const io = require('socket.io')(3000)
const mongoDB = 'mongodb+srv://Xin:Xin123@cluster0.kph7m.mongodb.net/users?retryWrites=true&w=majority';
const pathmodels = "D:/Scolaire/IDU4/S8/INFO834/proj_chat/v3/models/user.js"

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected')
}).catch(err => console.log(err))



io.on('connection', (socket) => {
    Msg.find().then(result => {
        socket.emit('output-messages', result)
    })
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chatmessage', (msg,sender, room) => {
        const message = new Msg({ msg: msg, sender: sender });
        message.save().then(() => {
            if (room === ''){
                io.emit('message', msg)
            }
            else {
                io.to(room).emit('message', msg)
            }
        })
    });

    socket.on('newuserco', (username,password) => {
        //console.log(username,password)
        const user = new User({ username, password});
        user.save().then(() => {
            //alert("You have been register")
            console.log("You have been register")
        })
    });
    
    socket.on('userco', (username,password) => {
        let User = require(pathmodels);
        User.findOne({username}, function(err, user) {
        if (err)
            throw err;
        if (user.comparePassword(password)) {
            /*req.session.username = gotuser.username;
            req.session.logged = true;
            res.status(200).json({token: createToken(user)});
            res.redirect('chatroom.html');*/
            console.log("success")
            io.emit("redirect");
            
        }
        });
    });

    socket.on('joinRoom', (room, cb) =>{
        socket.join(room)
        cb(`Joined ${room}`)
    });
        

});