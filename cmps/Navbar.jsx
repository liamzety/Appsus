const { Route, Switch, Link, NavLink } = ReactRouterDOM

export class Navbar extends React.Component {

    state = {
        isNavShown: false,
        currPage: 'Home'
    }


    componentDidMount() {
        if (this.props.location.pathname.includes('/miss-books')) {
            this.setState({ currPage: 'Books' })
        }
        else if (this.props.location.pathname.includes('/miss-keep')) {
            this.setState({ currPage: 'Keep' })
        }
        else if (this.props.location.pathname.includes('/miss-email')) {
            this.setState({ currPage: 'Email' })
        }
        else if (this.props.location.pathname.includes('/about')) {
            this.setState({ currPage: 'About' })
        }
        else if (this.props.location.pathname.includes('/')) {
            this.setState({ currPage: 'Home' })
        }

    }

    onToggleNav = (ev) => {

        switch (ev.target.className) {
            case 'fas fa-clipboard':
            case 'clipboard':
                this.setState({ currPage: 'Keep' })
                break;
            case 'fas fa-book':
            case 'book':
                this.setState({ currPage: 'Books' })
                break;
            case 'fas fa-mail-bulk':
            case 'mail':
                this.setState({ currPage: 'Mail' })
                break;
            case 'fas fa-user':
                this.setState({ currPage: 'About' })
                break;
            case 'fas fa-home':
                this.setState({ currPage: 'Home' })
                break;

        }
        this.setState({ isNavShown: !this.state.isNavShown })

    }

    onNotAv = (ev) => {
        ev.prevntDefault
    }

    render() {
        if (!this.state.currPage) return
        return (
            <section className="navbar-section">
                <img title="App menu" className="appsus-logo" onClick={this.onToggleNav} src="assets/img/appsus2.png" alt="" />
                {
                    this.state.currPage === 'Home' && <h1 className="curr-page">{this.state.currPage}</h1> || this.state.currPage === 'About' && <h1 className="curr-page">{this.state.currPage}</h1>
                    || <h1 className="curr-page">App<span>{this.state.currPage}</span></h1>

                }


                {this.state.isNavShown && <div className="nav-container">

                    <NavLink className="clipboard" onClick={this.onToggleNav} to='/miss-keep'>
                        <i className="fas fa-clipboard"></i>
                    </NavLink>
                    <NavLink className="book" onClick={this.onToggleNav} exact to='/miss-books'>
                        <i className="fas fa-book"></i>
                    </NavLink>
                    <NavLink className="mail" onClick={this.onToggleNav} exact to='/miss-email'>
                        <i className="fas fa-mail-bulk"></i>
                    </NavLink>
                    <NavLink className="about-page" onClick={this.onToggleNav} exact to='/about'>
                    <i className="fas fa-user"></i>
                    </NavLink>
                    <NavLink className="home-page" onClick={this.onToggleNav} exact to='/'>
                        <i className="fas fa-home"></i>
                    </NavLink>


                </div>}
            </section>
        )
    }

}