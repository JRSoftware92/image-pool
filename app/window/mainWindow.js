import { BrowserWindow } from 'electron';

export const createWindow = () => {
    let mainWindow = new BrowserWindow({
        width: 1024,
        height: 728
    });
        
    return mainWindow
}
