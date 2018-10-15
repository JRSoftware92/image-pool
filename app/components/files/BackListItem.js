import React from 'react'

import './files.css'

export default (props) => {
    const icon = '../resources/icons/folder.png'
    return (
        <div className="icon" onClick={ () => { props.onItemClick() } }>
            <img src={icon} />
            <label>Back</label>
        </div>
    )
}