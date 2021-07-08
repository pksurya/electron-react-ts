// import { ipcMain, IpcMainEvent, BrowserWindow } from 'electron';

// ipcMain.on('savePreferences', async (event: IpcMainEvent, arg: any): Promise<void> => {
//   const preferences = await Preferences.findByPk(1);
//   await preferences.update(arg);

//   const browserWindow = BrowserWindow.getFocusedWindow();
//   browserWindow?.webContents.send('preferencesSetAll', preferences.get({ plain: true }));
// });


// Remove the following once this file contains something


const { app, BrowserWindow, ipcMain } = require('electron');

ipcMain.on("createProfile", (event, arg) => {
    console.log("Creatng records..", arg);
});

export {};
