import React from 'react';
import img1 from '../Images/youtube.png'
import img2 from '../Images/yy.png'
import img3 from '../Images/cc.png'
import '../App.css';
const About = () => (
    <div className="container-fluid mt-5">
        <section className="text-center about">
            <h3 className="text-center mb-5">Watch & Play</h3>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-ex-12 mt-3" >
                        <span className="fa fa-2x fa-play-circle"></span>
                        <h3>YouTube Music</h3>
                        <p className="lead">A new music streaming app. Made by YouTube.</p>
                        <div className="row">
                            <div className="col-sm">
                                <span>Get Started <i className="fa fa-caret-down"></i></span>
                            </div>
                            <div className="col-sm">
                                <span>Support</span>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm">
                                <img src={img1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-ex-12 mt-3">
                        <span className="fab fa-2x fa-youtube"></span>
                        <h3>YouTube </h3>
                        <p className="lead">Discover, watch and share your favorite videos and music.</p>
                        <div className="row">
                            <div className="col-sm">
                                <span>Get Started <i className="fa fa-caret-down"></i></span>
                            </div>
                            <div className="col-sm">
                                <span>Support</span>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm">
                                <img src={img2} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-ex-12 mt-3">
                        <span className="fab fa-2x fa-chromecast"></span>
                        <h3>Chromecast</h3>
                        <p className="lead">Stream movies,music and more from your phone to your TV</p>
                        <div className="row">
                            <div className="col-sm">
                                <span>Get Started <i className="fa fa-caret-down"></i></span>
                            </div>
                            <div className="col-sm">
                                <span>Support</span>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm">
                                <img src={img3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default About;