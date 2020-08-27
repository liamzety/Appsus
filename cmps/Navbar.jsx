const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link, NavLink } = ReactRouterDOM

export class Navbar extends React.Component {

    state = {
        isNavShown: false
    }

    onToggleNav = () => {
        this.setState({ isNavShown: !this.state.isNavShown })
    }
    render() {

        return (
            <section className="navbar-section">
                <i onClick={this.onToggleNav} className="fas fa-th-list"></i>

                {this.state.isNavShown && <div className="nav-container">

                    <NavLink onClick={this.onToggleNav} to='/miss-keep'>
                        <i className="fas fa-clipboard"></i>
                    </NavLink>
                    <NavLink onClick={this.onToggleNav} exact to='/miss-books'>
                        <i className="fas fa-book"></i>
                    </NavLink>
                    <NavLink onClick={this.onToggleNav} exact to='/'>
                        <i className="fas fa-at"></i>
                    </NavLink>

                </div>}
            </section>
        )
    }

}