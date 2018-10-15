import { SELECT_FOLDER } from '../constants/actions'

export default (state=[], action={}) => {
    switch(action.type){
        case SELECT_FOLDER:
            return action.payload
        default:
            return state
    }
}