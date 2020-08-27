const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
// import { UserMsg } from "./cmps/UserMsg.jsx"

import { MissKeep } from "./pages/MissKeep/MissKeep.jsx"
import { MissEmail } from "./pages/MissEmail/MissEmail.jsx"
import { MissBooks } from "./pages/MissBooks/MissBooks.jsx"
import { Navbar } from './cmps/Navbar.jsx'
export class App extends React.Component {

    render() {


        return (
            <Router>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Switch>
                        <Route component={MissKeep} path="/miss-keep" />
                        <Route component={MissBooks} path="/miss-books" />
                        <Route component={MissEmail} path="/" />
                    </Switch>
                </main>

            </Router>
        )
    }
}

