import { combineReducers } from 'redux'

import photos from './photos'
import activePhoto from './activePhoto'
import files from './files'

export default combineReducers({ photos, activePhoto, files })