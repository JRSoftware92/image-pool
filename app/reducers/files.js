import { LOAD_IMAGE, OPEN_FOLDER } from '../constants/actions'

export default (state = [], action={}) => {
	switch(action.type){
		case LOAD_IMAGE:
			return action.payload.files
		case OPEN_FOLDER:
			return action.payload.files
		default:
			return state
	}
}