import { TREE_TOGGLE_VISIBILITY, TREE_OPEN_DIRECTORY } from '../actions/types'

const INITIAL_STATE = {
    visibleDirectories: {},
    openedDirectories: {}
}

export default (state=INITIAL_STATE, action={}) => {
    switch(action.type){
        case TREE_TOGGLE_VISIBILITY:
            const visibleDirectories = state.visibleDirectories
            let newVisibleDirectories = { ...visibleDirectories }
            newVisibleDirectories[action.filePath] = !visibleDirectories[action.filePath]

            return { ...state, visibleDirectories: newVisibleDirectories }
        case TREE_OPEN_DIRECTORY:
            const openedDirectories = state.openedDirectories
            let newOpenedDirectories = { openedDirectories }
            newOpenedDirectories[action.filePath] = action.files

            return { ...state, openedDirectories: newOpenedDirectories }
        default:
            return state
    }
}
