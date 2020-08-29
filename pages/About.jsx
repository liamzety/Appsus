export class About extends React.Component {

    render() {
        return (
            <section className="about">
                <h1>About The Creators</h1>

                <section className="creators-container">


                    <div className="roei-container">
                        <h2>Roei Arazi</h2>
                        <div className="info">

                            <div className="img-container">
                                <img src="../assets/img/prrofile-pic.jpeg" alt="" />
                            </div>
                            <div className="text-container">
                                <p>Roei is a 28 years old who started coding as a hobby and immediatly
                                fell inlove with the concept and wen straight
                                to the most intense course he could find he is learning
                                how to be the best "Fullstack Developer" he can!
                                as a former trainer Roei believes that you have to put
                                the work in order to achieve results!</p>
                                <ul className="social-links">
                                    <a href="https://www.facebook.com/FriZe6/"><li className="facebook"><i class="fab fa-facebook-square"></i></li></a>
                                    <a href="https://www.instagram.com/roeifit/"><li className="instagram"><i class="fab fa-instagram-square"></i></li></a>
                                    <a href="https://www.linkedin.com/in/roei-arazi-b1b42a19a/"><li className="linkedin"><i class="fab fa-linkedin"></i></li></a>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="liam-container">
                        <h2>Liam Zety</h2>
                        <div className="info">
                            <div className="img-container">
                                <img src="../assets/img/liam.jpeg" alt="" />
                            </div>
                            <div className="text-container">
                                <p>Roei is a 28 years old who started coding as a hobby and immediatly
                                fell inlove with the concept and wen straight
                                to the most intense course he could find he is learning
                                how to be the best "Fullstack Developer" he can!
                                as a former trainer Roei believes that you have to put
                                the work in order to achieve results!</p>
                                <ul className="social-links">
                                    <a href="https://www.facebook.com/FriZe6/"><li className="facebook"><i class="fab fa-facebook-square"></i></li></a>
                                    <a href="https://www.instagram.com/roeifit/"><li className="instagram"><i class="fab fa-instagram-square"></i></li></a>
                                    <a href="https://www.linkedin.com/in/roei-arazi-b1b42a19a/"><li className="linkedin"><i class="fab fa-linkedin"></i></li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}