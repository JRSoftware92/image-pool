import React from 'react'

export default (props) => {
    const icon = 'resources/icon/icon.png'
    return (
        <div onClick={ () => { props.onItemClick() } }>
            <img src={icon} className="icon" />
            <label>Back</label>
        </div>
    )
}