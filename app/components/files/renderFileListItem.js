import React from 'react'

export default (iconPath, filePath, onItemClick) => {
    const fileLabel = filePath.substr(filePath.lastIndexOf('/') + 1)

    return (
        <div onClick={ () => {onItemClick(filePath)} }>
            <img src={iconPath} className="icon-directory" />
            <label>{fileLabel}</label>
        </div>
    )
}