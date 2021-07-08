const { app, BrowserWindow ,ipcMain} = require('electron')
const path = require("path");
const isDev = require("electron-is-dev");
const debug = require('electron-debug');

debug();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      preload: path.join(__dirname, '../preload.js'),
    },
  })

  win.loadURL(
    isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, "../build/index.html")}` 
  )

  if (isDev) win.webContents.openDevTools()
}

if (isDev) app.commandLine.appendSwitch('ignore-certificate-errors')

if (require("electron-squirrel-startup")) {
  app.quit();
}

app.whenReady().then(() => {
  createWindow()

  if (isDev) {
    const devTools = require("electron-devtools-installer");
    devTools.default(devTools.REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension: ${name}`))
      .catch(error => console.log(`An error occurred: , ${error}`));
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})



ipcMain.on("testIPC", (event, arg) => {
  console.log("Some one calling me from page...", arg);
});