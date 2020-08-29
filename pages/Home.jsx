const { Link } = ReactRouterDOM


export class Home extends React.Component {

    render() {
        return (
            <React.Fragment>

                <section className="home">


                    <div className="vid-wrapper">
                        <video autoPlay src="../assets/vid/appsus-vid.mp4"></video>
                    </div>
                    <div className="home-links">
                        <Link to="/miss-keep">
                            <div title="Go to AppKeep" className="home-link">
                                <i className="fas fa-clipboard"></i>
                            </div>
                        </Link>
                        <Link to="/miss-books">
                            <div title="Go to AppBooks" className="home-link">
                                <i className="fas fa-book"></i>
                            </div>
                        </Link>
                        <Link to="/miss-email">

                            <div title="Go to AppEmail" className="home-link">
                                <i className="fas fa-mail-bulk"></i>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div title="Go to About" className="home-link">
                                <i className="fas fa-user"></i>
                            </div>
                        </Link>


                    </div>
                </section>

            </React.Fragment>
        )
    }
}