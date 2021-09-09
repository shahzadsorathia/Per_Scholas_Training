import React from 'react'

const Bath = (props) => {
    return (
        <div className='both' id={`bath-${props.size}`}>
             {props.size} Bath
            </div>
    )
}

export default Bath
