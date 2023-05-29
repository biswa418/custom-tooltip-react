import React from 'react'

const Tooltip = (props) => {
    let pos = props.position;
    pos === 'bottom' ? pos = 'btm' : pos;

    return (
        <div className={`tooltip-${pos}`}>Thanks for hovering! </div>
    )
}

export default Tooltip