import React from 'react'
import Bath from './Bath'
import BedRoom from './BedRoom'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'


const FloorPlan = () => {
    return (
        <div>
            <BedRoom bedNum={2} />
            <Kitchen  />
            <Bath  />
            <BedRoom />
            <LivingRoom />
            <Bath />
            <BedRoom />
        </div>
    )
}

export default FloorPlan
