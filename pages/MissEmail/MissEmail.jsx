const {Route}= ReactRouterDOM;

import { EmailApp } from './cmps/EmailApp.jsx'
import { Navbar } from "../../cmps/Navbar.jsx";

export class MissEmail extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <Route component={Navbar} />
                </header>
            <section className="miss-email">
                <EmailApp />
            </section>
            </React.Fragment>
        )
    }
}