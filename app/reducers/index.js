import { combineReducers } from 'redux'

import photos from './photos'
import activePhoto from './activePhoto'

export default combineReducers({ photos, activePhoto })