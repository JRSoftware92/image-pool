import { combineReducers } from 'redux'

import photos from './photos'
import activePhoto from './activePhoto'
import fileTree from './fileTree'

export default combineReducers({ photos, activePhoto, fileTree })