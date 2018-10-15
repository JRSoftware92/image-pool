import { ipcRenderer } from 'electron'
import _ from 'lodash'

import * as actions from '../constants/actions'
import * as ipcEvents from '../constants/ipcEvents'

export const loadImage = imagePath => dispatch => {
	const folder = imagePath.substr(0, imagePath.lastIndexOf('/')
	ipcRenderer.send(ipcEvents.GET_CONTENTS_OF_FOLDER, folder)

	ipcRenderer.on(ipcEvents.GET_CONTENTS_OF_FOLDER, (event, files) => {
		const selectedIndex = files.indexOf(imagePath)
		dispatch({
			type: actions.LOAD_IMAGE,
			payload: { 
				selectedIndex: selectedIndex,
				images: files
			}
		})
	})
}

export const openFolder = folder => dispatch => {
	ipcRenderer.send(ipcEvents.GET_CONTENTS_OF_FOLDER, folder)
	ipcRenderer.on(ipcEvents.GET_CONTENTS_OF_FOLDER, (event, files) => {
		dispatch({
			type: actions.OPEN_FOLDER,
			payload: files
		})
	})
}

export const shufflePool = photoArray => ({
	type: actions. POOL_SHUFFLE,
	payload: _.shuffle(photoArray)
})

export const loadPool = pool => ({
	type: actions. POOL_LOAD,
	payload: pool
})