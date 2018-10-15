import { combineReducers } from 'redux'

import files from './files'
import activeImage from './activeImage'
import currentFolder from './currentFolder'

export default combineReducers({ files, activeImage, currentFolder })