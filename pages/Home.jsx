export class Home extends React.Component {

    render() {
        return (
            <React.Fragment>

                <section className="home">
                    <div className="vid-wrapper">
                        <video autoPlay src="../assets/vid/appsus-vid.mp4"></video>
                    </div>
                    <div className="home-links">
                        <div className="home-link"> <i className="fas fa-clipboard"></i></div>
                        <div className="home-link">    <i className="fas fa-book"></i></div>
                        <div className="home-link">  <i className="fas fa-mail-bulk"></i></div>
                        <div className="home-link">
                            <i className="fas fa-user"></i></div>



                    </div>
                </section>

            </React.Fragment>
        )
    }
}