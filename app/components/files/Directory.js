import React from 'react'

export default (props) => {
    const srcOpen = '../../../resources/icon.png'
    const srcClosed = '../../../resources/icon.png'

    const srcIcon = props.visible ? srcOpen : srcClosed
    return (
        <div style='display:flex'>
            <img src={srcIcon} className="icon-directory" />
            <label>{props.filepath}</label>
        </div>
    )
}