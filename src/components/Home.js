import { Link } from 'react-router-dom'

let Home = () => {
    return(
        <div className="main">
            <h1 className="main-title">Quizzical</h1>
            <p className="main-desc">A quick quizz</p>
            <Link to="/game"><button className="main-btn">Start Quiz</button></Link>
        </div>
    )
}

export default Home