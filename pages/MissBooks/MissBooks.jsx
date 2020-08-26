const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM


import { BookApp } from './pages/BookApp.jsx';

import { BookDetails } from "./cmps/BookDetails.jsx";

export class MissBooks extends React.Component {

    render() {


        return (
            <Router>
                <div>
     
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

