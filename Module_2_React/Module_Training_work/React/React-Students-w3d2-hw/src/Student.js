import React from 'react';
import Score from './Score';

const Student = (props) => {
    return (
        <div >
            <p> {props.student.name} </p>
            <p >{props.student.bio}</p>
            {
                props.student.scores.map((item, index) => (
                    <Score key={index} score={item.score} date={item.date}/>
                ))
            }
        </div>
    );
};

export default Student;