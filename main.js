const { app, BrowserWindow } = require('electron');
const path = require('path');
const server = require('./server');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })
  server.start(() => {
    win.loadURL('http://127.0.0.1:9999');
  })
  // win.loadFile('index.html')
};
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
});

