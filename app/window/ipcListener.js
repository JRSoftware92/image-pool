import { ipcMain } from 'electron';

import { GET_CONTENTS_OF_FOLDER } from '../constants/ipcEvents'
import { getAllFiles } from '../utils/fileUtils'

// Load File Tree to Navigate
ipcMain.on(GET_CONTENTS_OF_FOLDER, async (event, folder) => {
    console.log(`Getting Files from Folder: ${folder}`)
    getAllFiles(folder).then((files) => {
        console.log(`Found Files: ${JSON.stringify(files)}`)
        event.sender.send(GET_CONTENTS_OF_FOLDER, files)
    })
})

export default ipcMain