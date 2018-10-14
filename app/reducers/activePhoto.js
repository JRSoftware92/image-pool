import { SELECT_PHOTO } from '../actions/types'

export default (state = '', action={}) => {
	switch(action.type){
		case SELECT_PHOTO:
			return action.payload
		default:
			return state
	}
}