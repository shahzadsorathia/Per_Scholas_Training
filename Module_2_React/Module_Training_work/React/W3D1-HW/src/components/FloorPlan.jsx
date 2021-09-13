import React from 'react'
import Bath from './Bath'
import BedRoom from './BedRoom'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'


const FloorPlan = () => {
    return (
        <div>
            <BedRoom bedNum={"1"} />
            <Kitchen />
            <Bath size={"Full"} />
            <BedRoom bedNum={"2"} />
            <LivingRoom />
            <Bath size={"Half"} />
            <BedRoom bedNum={"3"} />
        </div>
    )
}

export default FloorPlan
