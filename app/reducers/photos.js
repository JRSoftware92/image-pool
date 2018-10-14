import { POOL_LOAD, POOL_SHUFFLE } from '../actions/types'

export default (state = [], action={}) => {
	switch(action.type){
		case POOL_LOAD:
			return action.payload.photos
		case POOL_SHUFFLE:
			return action.payload
		default:
			return state
	}
}