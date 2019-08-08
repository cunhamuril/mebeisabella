import React, { Component } from "react";
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBView
} from "mdbreact";

class CarouselPage extends Component {
    render() {
        return (
            <div className="galery-section" id="galery">
                <MDBContainer className="py-5">
                    <h1 className="display-4 d-flex justify-content-center mb-4">Obras</h1>
                    <MDBRow>
                        <MDBCol md="12" className="mb-3">
                            <MDBView hover zoom>
                                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" className="img-fluid z-depth-1" alt="" />
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-3">
                            <MDBView hover zoom>
                                <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className="img-fluid z-depth-1" alt="" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-3">
                            <MDBView hover zoom>
                                <img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className="img-fluid z-depth-1" alt="" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-3">
                            <MDBView hover zoom>
                                <img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className="img-fluid z-depth-1" alt="" />
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6" className="mb-3">
                            <MDBView hover zoom>
                                <img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid z-depth-1" alt="" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                            <MDBView hover zoom>
                                <MDBView hover zoom>
                                    <img src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg" className="img-fluid z-depth-1" alt="" />
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