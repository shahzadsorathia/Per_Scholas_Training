import React from 'react';

const Score = (props) => {
    return (
        <div>
            <p>Scored {props.score} on {props.date}</p>
        </div>
    );
};

export default Score;