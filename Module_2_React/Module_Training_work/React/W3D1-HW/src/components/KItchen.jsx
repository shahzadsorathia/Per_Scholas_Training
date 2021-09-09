import React from 'react'
import Oven from './Items/Oven'
import Sink from './Items/Sink'

const Kitchen = () => {
    return (
        <div className="kitchen">
            Kitchen
            <Oven />
            <Sink />
        </div>
    )
}

export default Kitchen
