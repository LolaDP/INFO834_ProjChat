const socket = io('http://localhost:3000');
const coForm = document.getElementById('coForm');
const newcoForm = document.getElementById('newcoForm');

newcoForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log(newcoForm);
    if (newcoForm.username.value == ""){
        alert("enter your username");
    } 
    else if (newcoForm.password.value == ""){
        alert ("enter your password");
    }
    socket.emit('newuserco', newcoForm.username.value, newcoForm.password.value)
    console.log('submit from newcofrom', newcoForm.username.value, newcoForm.password.value)
    newcoForm.username.value = '';
    newcoForm.password.value = '';

})

coForm.addEventListener('submit', e => {
    e.preventDefault()
    socket.emit('userco', coForm.username.value, coForm.password.value)
    console.log('submit from cofrom', coForm.username.value, coForm.password.value)
    coForm.username.value = '';
    coForm.password.value = '';

})

socket.on("redirect", () => {
    console.log("you here ")
    redirect();
})

function redirect(){
    window.location.href="http://127.0.0.1:5500/chatroom.html";

}
