const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

import { Navbar } from "../../cmps/Navbar.jsx";
import { BookApp } from './pages/BookApp.jsx';

import { BookDetails } from "./cmps/BookDetails.jsx";

export class MissBooks extends React.Component {

    render() {


        return (
            <Router>
                <div className="bg">
                <header>
                    <Route component={Navbar} />
                </header>
     
                    <main className="container">
                        <Switch>
                            <Route component={ BookDetails } path="/miss-books/:bookId" />
                            <Route component={BookApp} path="/miss-books" />     
                        </Switch>
                    </main>
                    
                </div>
            </Router>
        )
    }
}

