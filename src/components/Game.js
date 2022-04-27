
import React from "react"
import Questions from "./Questions"
import {nanoid} from "nanoid"

let Game = () => {

    const [allQuestions, setAllQuestions] = React.useState([])


    React.useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res =>res.json())
            .then(data => setAllQuestions(data.results))
    }, [])


    //const myData = allQuestions.map(element => <Questions question={element.question} incorrect_answers={element.incorrect_answers} correct_answer={element.correct_answer}/>)
    const myData = allQuestions.map(element => <Questions question={element.question} answers={element.incorrect_answers.concat(element.correct_answer)}/>)


    return(
        <div>
            <div className="main-questions">
                {myData}
            </div>
            <div className="check-container">
                <p className="check">Check answers</p>
            </div>
        </div>

    )
}

export default Game;