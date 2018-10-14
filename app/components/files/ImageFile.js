import React from 'react'

export default (props) => {
    return (
        <div style="display:flex">
            <img src='../../../resources/icon.png' className="icon-image-file"/>
            <label>{props.filepath}</label>
        </div>
    )
}