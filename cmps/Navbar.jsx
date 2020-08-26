export class Navbar extends React.Component {

    state = {
        isNavShown: false
    }

    onToggleNav = () => {
        this.setState({ isNavShown: !this.state.isNavShown })
    }
    render() {

        return (
            <section className="navbar">
                <button onClick={this.onToggleNav}>NAVBAR</button>
                {this.state.isNavShown && <div className="nav-container">
                    <i class="fas fa-book"></i>
                    <i class="fas fa-clipboard"></i>
                    <i class="fas fa-at"></i>
                </div>}
            </section>
        )
    }

}