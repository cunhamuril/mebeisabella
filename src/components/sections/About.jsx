import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Avatar from '../../assets/img/avatar.jpg'

import './About.css'

class HoverPage extends React.Component {
  render() {
    return (
      <div className="about-section my-5" id="about">
        <MDBContainer className="py-5">
          <h1 className="display-4 d-flex justify-content-center mb-4" id="about">Sobre</h1>
          <MDBRow className="d-flex justify-content-center">
            <img 
              src={Avatar}
              className="rounded-circle img-fluid"
              id="avatar"
              alt="Avatar" />
            <div className="about px-md-5 mx-md-5 pt-3">
              <p className="text-center pt-md-5" style={{ fontSize: "24px" }}>
                <i className="fa fa-quote-left" /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem ad ab enim. Laborum, adipisci voluptates! Voluptatibus corporis illo voluptatum! Eaque, libero?
                Repellendus, alias? Quas maxime ipsa debitis illo. Enim, explicabo? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             </p>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HoverPage;