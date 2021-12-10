const { app, BrowserWindow } = require('electron')
const electron = require('electron')
require('electron-reload')(__dirname)
let win 

const createWindow = () =>{ 
    let screen = electron.screen
    let primaryScreen = screen.getPrimaryDisplay()
    win = new BrowserWindow({show: false, icon: 'src/img/logo.png',
    minWidth: primaryScreen.size.width - 50,
    minHeight: primaryScreen.size.height - 20,
    webPreferences: {
        nodeIntegration : true
    }})

    win.setMenuBarVisibility(false)
    win.isMinimizable() ? win.setPosition(0,0) : win.maximize()
    win.maximize()
    win.loadFile('src/views/index.html')
}

app.whenReady().then(() =>{
   createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})