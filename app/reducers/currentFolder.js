import { OPEN_FOLDER } from '../constants/actions'

export default (state = '.', action={}) => {
	switch(action.type){
		case OPEN_FOLDER:
			return action.payload.currentFolder
		default:
			return state
	}
}