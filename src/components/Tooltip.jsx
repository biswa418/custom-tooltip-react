import React from 'react'

const Tooltip = (props) => {
    let position = props.position;
    position === 'bottom' ? position = 'btm' : position;

    return (
        <div className={`tooltip-${position}`}>Thanks for hovering! </div>
    )
}

export default Tooltip