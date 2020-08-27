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
                <i onClick={this.onToggleNav} class="fas fa-th-list"></i>

                {this.state.isNavShown && <div className="nav-container">

                    <NavLink to='/miss-keep'>
                        <i onClick={this.onToggleNav} className="fas fa-clipboard"></i>
                    </NavLink>
                    <NavLink to='/miss-books'>
                        <i onClick={this.onToggleNav} className="fas fa-book"></i>
                    </NavLink>
                    <NavLink exact to='/'>
                        <i onClick={this.onToggleNav} className="fas fa-at"></i>
                    </NavLink>

                </div>}
            </section>
        )
    }

}