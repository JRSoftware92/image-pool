import { LOAD_IMAGE, POOL_SHUFFLE } from '../constants/actions'

export default (state = [], action={}) => {
	switch(action.type){
		case LOAD_IMAGE:
			return action.payload.images
		case POOL_SHUFFLE:
			return action.payload
		default:
			return state
	}
}