import Home from "./Home"
import Game from "./Game"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

let App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/game">
                    <Game/>
                </Route>
            </Switch>
        </Router>
    )
} 

export default App