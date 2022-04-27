import he from "he"
import React from "react"


const Question = (props) => {

    //let answers = props.incorrect_answers 
    //answers.push(props.correct_answer)
    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
    }

    /*let mixAnswers = props.answers
       .map(value => ({ value, sort: Math.random()}))
       .sort((a, b) => a.sort - b.sort)
       .map(({value}) => value)*/

    let questions = he.decode(props.question)


    const [response, setResponse] = React.useState("")

    /*const getResp = (element) => {
        setResponse(mixAnswers.indexOf(element))
        console.log(response)
    }*/

    return (
        <div>
            <h2 className="questions">{questions}</h2>
            <div className="answers-container">
            {props.answers.map(ele => <span className="answers" onClick={() => setResponse(ele)} id={ele === response && "active"}>{he.decode(ele)}</span>)}
            </div>
    
            <hr className="seperate"/>
        </div>
    )
}

export default Question