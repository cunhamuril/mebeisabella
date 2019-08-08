import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './Footer.css'

const FooterPage = () => {
    return (
        <MDBFooter color="grey darken-4" className="font-small pt-4 mt-4 wow fadeIn foot" >
            <MDBContainer fluid className="text-center">
                <MDBRow>
                    <MDBCol className="col-md-12 py-3">
                        <div className="mb-5 flex-center">
                            {/* eslint-disable-next-line */}
                            <a href="https://www.facebook.com/mebeisabellaart" className="fb-ic" target="_blank">
                                <i className="fab fa-facebook-f fa-lg  mr-md-5 mr-3 fa-2x" id="icon-footer"></i>
                            </a>
                            {/* eslint-disable-next-line */}
                            <a href="https://www.instagram.com/mebeisabellaart" className="ins-ic" target="_blank">
                                <i className="fab fa-instagram fa-lg  mr-md-5 mr-3 fa-2x" id="icon-footer"></i>
                            </a>
                            {/* eslint-disable-next-line */}
                            <a href="" className="be-ic" target="_blank">
                                <i className="fab fa-behance fa-lg  mr-md-5 mr-3 fa-2x" id="icon-footer"></i>
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-2" >
                <MDBContainer fluid color="grey darken-1">
                    Site desenvolvido por <a href="http://github.com/cunhamuril"
                        target="_blank" rel="noopener noreferrer" className="linkfoot">Murilo Cunha</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;