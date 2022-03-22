const socket = io('http://localhost:3000');
const messages = document.getElementById('messages');
const msgForm = document.getElementById('msgForm');
const joinRoomButton=document.getElementById("roomButton")
const roomInput=document.getElementById("roomInput")

socket.on('connect', () =>{
    const html = `<h2>${socket.id}</h2>`
    userid.innerHTML += "You connected with id: " + html;
})
socket.on('message', data => {
    console.log(data)
    appendMessages(data)
})
socket.on('output-messages', data => {
    console.log(data)
    if (data.length) {
        data.forEach(message => {
            appendMessages(message)
        });
    }
}) 

msgForm.addEventListener('submit', e => {
    e.preventDefault()
    const room = msgForm.roomInput.value
    socket.emit('chatmessage', msgForm.msg.value, socket.id, room)
    console.log('submit from msgfrom', msgForm.msg.value)
    msgForm.msg.value = '';


})

joinRoomButton.addEventListener("click", () =>{
    const room = msgForm.roomInput.value
    socket.emit('joinRoom', room, msg => {
        messages.innerHTML += `<div id='join'> ${msg} </div>`
    })
})

function appendMessages(message) {
    const html = `<div>${message.msg}</div>`
    const htmlsender =`<span>${message.sender}</span>`
    messages.innerHTML += html
    messages.innerHTML += "by " + htmlsender;
} 