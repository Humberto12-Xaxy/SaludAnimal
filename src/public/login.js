const {ipcRenderer} = require('electron')

const btnLogin = document.getElementById('btn-login')
let username = document.getElementById('username')
let pass = document.getElementById('password')


btnLogin.addEventListener('click', (e)=>{
    e.preventDefault()
    
    let credentials = {
        email : username.value,
        password : pass.value
    }

    ipcRenderer.send('credentials', credentials)
})


