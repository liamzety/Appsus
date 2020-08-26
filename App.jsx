const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
// import { UserMsg } from "./cmps/UserMsg.jsx"

import { MissKeep } from "./pages/MissKeep/MissKeep.jsx"
import { MissEmail } from "./pages/MissEmail/MissEmail.jsx"
import { MissBooks } from "./pages/MissBooks/MissBooks.jsx"

export class App extends React.Component {

    render() {


        return (
            <Router>
                <header>
                    <Link to='/miss-keep'>
                        <button>
                            GO TO KEEP
                </button>
                    </Link>
                    <Link to='/miss-books'>
                        <button>
                            GO TO books
                </button>
                    </Link>
                    <Link to='/'>
                        <button>
                            GO TO email
                </button>
                    </Link>
                </header>
                <main>
                    <Switch>
                        <Route component={MissKeep} path="/miss-keep" />
                        <Route component={MissBooks} path="/miss-books" />
                        <Route component={MissEmail} path="/" />
                    </Switch>
                </main>
                <footer>
                    <h1>footer</h1>
                </footer>
            </Router>
        )
    }
}

