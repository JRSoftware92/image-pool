import { createSelector } from 'reselect'

import { filterNonImageFiles } from '../utils/fileUtils'

const getActiveImageIndex = state => state.activeImage

export const getImagesFromFiles = state => filterNonImageFiles(state.files)

export const getActiveImagePath = createSelector(
    getImagesFromFiles,
    getActiveImageIndex,
    (images, activeImageIndex) => images[activeImageIndex]
)

