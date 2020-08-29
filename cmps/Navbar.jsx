const { Route, Switch, Link, NavLink } = ReactRouterDOM

export class Navbar extends React.Component {

    state = {
        isNavShown: false,
        currPage: 'fas fa-mail-bulk curr-page'
    }


    componentDidMount() {
        console.log('is it?', this.props.location.pathname.includes('/miss-books'))
        console.log('is it?', this.props.location.pathname.includes('/miss-books'))
        if (this.props.location.pathname.includes('/miss-books')) {
            this.setState({ currPage: 'Books' })
        }
        else if (this.props.location.pathname.includes('/miss-keep')) {
            this.setState({ currPage: 'Keep' })
        }
        else if (this.props.location.pathname.includes('/')) {
            this.setState({ currPage: 'Mail' })
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
                <img className="appsus-logo" onClick={this.onToggleNav} src="../assets/img/appsus2.png" alt="" />
                {/* <i  className="fas fa-th-list"></i> */}

                <h1 className="curr-page">App<span>{this.state.currPage}</span></h1>


                {this.state.isNavShown && <div className="nav-container">

                    <NavLink className="clipboard" onClick={this.onToggleNav} to='/miss-keep'>
                        <i className="fas fa-clipboard"></i>
                    </NavLink>
                    <NavLink className="book" onClick={this.onToggleNav} exact to='/miss-books'>
                        <i className="fas fa-book"></i>
                    </NavLink>
                    <NavLink className="mail" onClick={this.onToggleNav} exact to='/'>
                        <i className="fas fa-mail-bulk"></i>
                    </NavLink>


                </div>}
            </section>
        )
    }

}