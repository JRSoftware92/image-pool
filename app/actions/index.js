import { ipcRenderer } from 'electron'
import _ from 'lodash'

import { getParentDirectory } from '../utils/fileUtils'
import * as actions from '../constants/actions'
import * as ipcEvents from '../constants/ipcEvents'

export const loadImage = imagePath => dispatch => {
	const folder = getParentDirectory(imagePath)
	ipcRenderer.send(ipcEvents.GET_CONTENTS_OF_FOLDER, folder)

	ipcRenderer.on(ipcEvents.GET_CONTENTS_OF_FOLDER, (event, files) => {
		console.log(`Files: ${JSON.stringify(files)}`)
		dispatch({
			type: actions.LOAD_IMAGE,
			payload: { 
				activeImage: imagePath, 
				files
			}
		})
	})
}

export const openFolder = folder => dispatch => {
	ipcRenderer.send(ipcEvents.GET_CONTENTS_OF_FOLDER, folder)
	ipcRenderer.on(ipcEvents.GET_CONTENTS_OF_FOLDER, (event, files) => {
		console.log(`Files: ${JSON.stringify(files)}`)
		dispatch({
			type: actions.OPEN_FOLDER,
			payload: { 
				currentFolder: folder, 
				files: files
			}
		})
	})
}

export const backDirectory = () => (dispatch, getState) => {
	const state = getState()
	const { currentFolder } = state
	const parentFolder = getParentDirectory(currentFolder)

	console.log(`Parent: ${parentFolder}`)

	ipcRenderer.send(ipcEvents.GET_CONTENTS_OF_FOLDER, parentFolder)
	ipcRenderer.on(ipcEvents.GET_CONTENTS_OF_FOLDER, (event, files) => {
		console.log(`Files: ${JSON.stringify(files)}`)
		dispatch({
			type: actions.OPEN_FOLDER,
			payload: { 
				currentFolder: parentFolder, 
				files: files
			}
		})
	})
}
