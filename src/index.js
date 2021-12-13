const { app, BrowserWindow, ipcMain} = require('electron')
const electron = require('electron')
require('electron-reload')(__dirname)
let win 

const createWindow = () =>{ 
    let screen = electron.screen
    let primaryScreen = screen.getPrimaryDisplay()
    
    win = new BrowserWindow({
        show: false, 
        icon: 'src/img/logo.jpg',
        minWidth: primaryScreen.size.width - 50,
        minHeight: primaryScreen.size.height - 20,
        webPreferences: {
            nodeIntegration : true,
            enableRemoteModule : true,
            contextIsolation : false
        }
    })
    win.setMenuBarVisibility(false)
    win.isMinimizable() ? win.setPosition(0,0) : win.maximize()
    win.maximize()
    // win.webContents.openDevTools()
    win.loadFile('src/views/index.html')
}

const createNewWindow = (file) => {
    win.loadFile(file)
}

ipcMain.on('credentials', (e, credentials)=>{
    console.log(credentials)
    createNewWindow('src/views/main.html')
})

app.whenReady().then(() =>{
    createWindow()
 })
 
 app.on('window-all-closed', () => {
     app.quit()
 })