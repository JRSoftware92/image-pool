import React from 'react'

import renderFileListItem from './renderFileListItem'

export default (props) => {
    const icon = 'resources/icon/image.png'
    return renderFileListItem(icon, props.filepath, props.onItemClick)
}