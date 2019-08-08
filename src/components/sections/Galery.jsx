import React, { Component } from "react";
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBView
} from "mdbreact";

import Glr1 from '../../assets/img/gallery/glr1.jpg'
import Glr2 from '../../assets/img/gallery/glr2.jpg'

import Glr3 from '../../assets/img/gallery/glr3.jpg'
import Glr4 from '../../assets/img/gallery/glr4.jpg'
import Glr5 from '../../assets/img/gallery/glr5.jpg'

import Glr6 from '../../assets/img/gallery/glr6.jpg'
import Glr7 from '../../assets/img/gallery/glr7.jpg'

import Glr8 from '../../assets/img/gallery/glr8.jpg'
import Glr9 from '../../assets/img/gallery/glr9.jpg'
import Glr10 from '../../assets/img/gallery/glr10.jpg'

import Glr11 from '../../assets/img/gallery/glr11.jpg'
import Glr12 from '../../assets/img/gallery/glr12.jpg'
import Glr13 from '../../assets/img/gallery/glr13.jpg'
import Glr14 from '../../assets/img/gallery/glr14.jpg'

class CarouselPage extends Component {
    render() {
        return (
            <div className="galery-section" id="galery">
                <MDBContainer className="py-5">
                    <h1 className="display-4 d-flex justify-content-center mb-4">Obras</h1>
                    <MDBRow>
                        <MDBCol md="6" className="mb-3 d-flex justify-content-center">
                            <MDBView hover zoom>
                                <img src={Glr1} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3 d-flex justify-content-center">
                            <MDBView hover zoom>
                                <img src={Glr2} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-3">
                            <MDBView hover zoom>
                                <img src={Glr3} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-3">
                            <MDBView hover zoom>
                                <img src={Glr4} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-3">
                            <MDBView hover zoom>
                                <img src={Glr5} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6" className="mb-3">
                            <MDBView hover zoom>
                                <img src={Glr6} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                            <MDBView hover zoom>
                                <MDBView hover zoom>
                                    <img src={Glr7} className="img-fluid z-depth-1" alt="Gallery" />
                                </MDBView>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <MDBView hover zoom>
                                <img src={Glr8} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <MDBView hover zoom>
                                <MDBView hover zoom>
                                    <img src={Glr9} className="img-fluid z-depth-1" alt="Gallery" />
                                </MDBView>
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <MDBView hover zoom>
                                <MDBView hover zoom>
                                    <img src={Glr10} className="img-fluid z-depth-1" alt="Gallery" />
                                </MDBView>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="3" className="mb-3">
                            <MDBView hover zoom>
                                <img src={Glr11} className="img-fluid z-depth-1" alt="Gallery" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="3" className="mb-3">
                            <MDBView hover zoom>
                                <MDBView hover zoom>
                                    <img src={Glr12} className="img-fluid z-depth-1" alt="Gallery" />
                                </MDBView>
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="3" className="mb-3">
                            <MDBView hover zoom>
                                <MDBView hover zoom>
                                    <img src={Glr13} className="img-fluid z-depth-1" alt="Gallery" />
                                </MDBView>
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="3" className="mb-3">
                            <MDBView hover zoom>
                                <MDBView hover zoom>
                                    <img src={Glr14} className="img-fluid z-depth-1" alt="Gallery" />
                                </MDBView>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default CarouselPage;