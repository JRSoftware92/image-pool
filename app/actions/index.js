import _ from 'lodash'

import { SELECT_PHOTO, POOL_LOAD, POOL_SHUFFLE } from './types'

export const selectPhoto = photo => ({
	type: SELECT_PHOTO,
	payload: photo
})

export const shufflePool = photoArray => ({
	type: POOL_SHUFFLE,
	payload: _.shuffle(photoArray)
})

export const loadPool = pool => ({
	type: POOL_LOAD,
	payload: pool
})