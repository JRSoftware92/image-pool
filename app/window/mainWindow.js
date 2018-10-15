import { BrowserWindow } from 'electron';

export const createWindow = () => {
    let mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728
    });
    
    mainWindow.loadURL(`file://${__dirname}/app.html`);
    
    return mainWindow
}
