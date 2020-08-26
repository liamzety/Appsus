const { NavLink, withRouter } = ReactRouterDOM

export class AppHeader extends React.Component {

    render() {
        return (
            <section>
                
                <ul className="navbar-list">

                    <NavLink to="/"><li className="header-link"> Home </li></NavLink>
                    <li className="line"> | </li>
                    <NavLink to="/about"><li className="header-link">About</li></NavLink>
                    <li className="line"> | </li>
                    <NavLink to="/books"><li className="header-link">Books</li></NavLink>

                </ul>
            </section>
        )
    }
}