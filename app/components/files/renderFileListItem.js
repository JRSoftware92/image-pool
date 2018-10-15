import React from 'react'

import './files.css'

export default (iconPath, filePath, onItemClick) => {
    const fileLabel = filePath.substr(filePath.lastIndexOf('/') + 1)

    return (
        <div className="icon" onClick={ () => {onItemClick(filePath)} }>
            <img src={iconPath} className="icon" />
            <label>{fileLabel}</label>
        </div>
    )
}