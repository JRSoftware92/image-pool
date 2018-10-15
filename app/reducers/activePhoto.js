import { LOAD_IMAGE } from '../constants/actions'

export default (state = '', action={}) => {
	switch(action.type){
		case LOAD_IMAGE:
			return action.payload.selectedIndex
		default:
			return state
	}
}