import { LOAD_IMAGE } from '../constants/actions'

export default (state = -1, action={}) => {
	switch(action.type){
		case LOAD_IMAGE:
			return action.payload.activeImage
		default:
			return state
	}
}