export class Home extends React.Component {

    render() {
        return (
            <React.Fragment>

                <section className="home">
                    <div className="vid-wrapper">
                        <video autoPlay src="../assets/vid/appsus-vid.mp4"></video>
                    </div>
                    <div className="home-links">
                        <button>GO TO KEEP</button>
                        <button>GO TO BOOKS</button>
                        <button>GO TO EMAILS</button>
                        <button>GO TO ABOUT</button>
                    </div>
                </section>
                <footer>
                    coffeerights
            </footer>
            </React.Fragment>
        )
    }
}