const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM


import { MissKeep } from "./pages/MissKeep/MissKeep.jsx"
import { MissEmail } from "./pages/MissEmail/MissEmail.jsx"
import { MissBooks } from "./pages/MissBooks/MissBooks.jsx"
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";

export class App extends React.Component {

    render() {


        return (
            <Router>

                <main>
                    <Switch>
                        <Route component={MissKeep} path="/miss-keep" />
                        <Route component={MissBooks} path="/miss-books" />
                        <Route component={MissEmail} path="/miss-email" />
                        <Route component={About} path="/about" />
                        <Route component={Home} path="/" />

                    </Switch>
                </main>

            </Router>
        )
    }
}

