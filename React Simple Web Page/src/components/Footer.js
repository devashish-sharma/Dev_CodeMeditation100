import React from 'react';
import '../App.css';
import BackToTop from 'react-back-to-top';
const Footer = () => {
    return (

        <footer className="footer bg-light p-2 mt-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <span className="p-2"> <i className="fa fa-1x fa-question-circle"></i> Help</span>
                        <span className="p-2"> Privacy</span>
                        <span className="p-2"> Terms</span>
                    </div>
                    <div className="col-sm text-right">

                        <BackToTop
                            mainStyle={{
                                width: '100%',
                                height: '100%',
                            }}
                            percentStyle={{
                                width: '100%',
                                height: '100%',
                            }}
                            animate='rotate'
                            offsetTop={20}
                            step={50}
                            percent={true}
                            visiblePercent={50}
                            className="c-animate-show"
                        />
                        
                        {/* <span className="btn btn-outline-dark">Back to Top <i className="fa fa-info-circle"></i></span> */}
                    </div>
                </div>

            </div>

        </footer>

    );
}

export default Footer;
