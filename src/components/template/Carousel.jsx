import React from "react";
import './Carousel.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBCol } from
    "mdbreact";

import Carousel1 from '../../assets/img/carousel1.jpg'

const CarouselCaption = () => {
    return (
        <MDBCol className="mb-4 white-text text-center">
            <h1 className="mb-0 pt-md-5 pt-5 white-text title-cc">MEBE<span>ISABELLA</span></h1>
            <hr className="hr-light my-4" />
            <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold">Art</h5>            
        </MDBCol>
    )
}

const CarouselPage = () => {
    return (
        <div className="main-section" id="main">
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1 carousel"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="img-carousel d-block w-100"
                                src={Carousel1}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <CarouselCaption />
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="img-carousel d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <CarouselCaption />
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="img-carousel d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <CarouselCaption />
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
}

export default CarouselPage;