import { combineReducers } from 'redux'

import images from './images'
import activeImage from './activeImage'
import currentFolder from './currentFolder'

export default combineReducers({ images, activeImage, currentFolder })