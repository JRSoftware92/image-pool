import _ from 'lodash'

import * as actions from './types'

export const selectPhoto = photo => ({
	type: actions.SELECT_PHOTO,
	payload: photo
})

export const shufflePool = photoArray => ({
	type: actions. POOL_SHUFFLE,
	payload: _.shuffle(photoArray)
})

export const loadPool = pool => ({
	type: actions. POOL_LOAD,
	payload: pool
})

export const toggleVisibility = filePath => ({ 
	type: actions.TREE_TOGGLE_VISIBILITY, 
	payload: filePath 
});

export const openDirectory = (filePath, files) => ({ 
	type: actions.TREE_OPEN_DIRECTORY, 
	payload: { filePath, files }
});