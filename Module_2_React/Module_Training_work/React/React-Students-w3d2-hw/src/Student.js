import Score from "./Score"
const Student =(props) => {
    const scoreList = props.scholars.scores.map((score)=> <Score points={score}/>)
    return (
        <div>
            <div>name: {props.scholars.name} </div>
           <div>bio: {props.scholars.bio}</div>
           {scoreList} 
        </div>
    )
}

export default Student