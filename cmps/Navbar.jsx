const { Route, Switch, Link, NavLink } = ReactRouterDOM

export class Navbar extends React.Component {

    state = {
        isNavShown: false,
        currPage: 'fas fa-mail-bulk curr-page'
    }


    componentDidMount() {
        switch (this.props.location.pathname) {
            case '/miss-books':
                this.setState({ currPage: 'Miss Books' })
                break;
            case '/miss-keep':
                this.setState({ currPage: 'Miss Keep' })
                break;
            case '/':
                this.setState({ currPage: 'Miss Email' })
                break;
        }
    }
    // TODO CHANGE!
    onToggleNav = (ev) => {
        let className;
        className = ev.target.className
        switch (className) {
            case 'fas fa-clipboard':
            case 'clipboard':
                this.setState({ currPage: 'Miss Keep' })
                break;
            case 'fas fa-book':
            case 'book':
                this.setState({ currPage: 'Miss Books' })
                break;
            case 'fas fa-mail-bulk':
            case 'mail':
                this.setState({ currPage: 'Miss Email' })
                break;

        }
        console.log('', ev.target.className)
        this.setState({ isNavShown: !this.state.isNavShown, currPage: className })

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

                <h1>{this.state.currPage}</h1>
                <i className={this.state.currPage}></i>

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