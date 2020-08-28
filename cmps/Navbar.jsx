const { Route, Switch, Link, NavLink } = ReactRouterDOM

export class Navbar extends React.Component {

    state = {
        isNavShown: false,
        currPage: 'fas fa-mail-bulk curr-page'
    }


    componentDidMount() {
        switch (this.props.location.pathname) {
            case '/miss-books':
                this.setState({ currPage: 'fas fa-book curr-page' })
                break;
            case '/miss-keep':
                this.setState({ currPage: 'fas fa-clipboard curr-page' })
                break;
            case '/':
                this.setState({ currPage: 'fas fa-mail-bulk curr-page' })
                break;
        }
    }

    onToggleNav = (ev) => {
        let className;
        className = ev.target.className
        switch (className) {
            case 'fas fa-clipboard':
            case 'clipboard':
                className = 'fas fa-clipboard curr-page'
                break;
            case 'fas fa-book':
            case 'book':
                className = 'fas fa-book curr-page'
                break;
            case 'fas fa-mail-bulk':
            case 'mail':
                className = 'fas fa-mail-bulk curr-page'
                break;
            default:
                className = this.state.currPage
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
                <img className="appsus-logo" onClick={this.onToggleNav} src="../assets/img/appsus-icon.png" alt="" />
                {/* <i  className="fas fa-th-list"></i> */}

                <i className={this.state.currPage}></i>

                {this.state.isNavShown && <div className="nav-container">

                    <NavLink className="clipboard" onClick={this.onToggleNav} to='/miss-keep'>
                        <i className="fas fa-clipboard"></i>
                    </NavLink>
                    <NavLink className="book" onClick={this.onToggleNav} exact to='/miss-books'>
                        <i className="fas fa-book"></i>
                    </NavLink>
                    {/* <a onClick={this.onNotAv} className="not-aviable">
                        <i class="fab fa-algolia not-aviable"></i>
                    </a>
                    <a onClick={this.onNotAv} className="not-aviable">
                        <i className="fab fa-aws not-aviable"></i>
                    </a>
                    <a onClick={this.onNotAv} className="not-aviable">
                        <i className="far fa-address-book not-aviable"></i>
                    </a> */}
                    <NavLink className="mail" onClick={this.onToggleNav} exact to='/'>
                        <i className="fas fa-mail-bulk"></i>
                    </NavLink>


                </div>}
            </section>
        )
    }

}