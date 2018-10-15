import { ipcMain } from 'electron';

import { GET_CONTENTS_OF_FOLDER } from '../constants/ipcEvents'
import { getAllFiles } from '../utils/fileUtils'

// Load File Tree to Navigate
ipcMain.on(GET_CONTENTS_OF_FOLDER, async (event, request) => {
    const files = getAllFiles(request.path)
    event.sender.send(GET_CONTENTS_OF_FOLDER, files)
})

export default ipcMain