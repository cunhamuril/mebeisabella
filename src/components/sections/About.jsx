import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Avatar from '../../assets/img/avatar.jpg'

import './About.css'

class HoverPage extends React.Component {
  render() {
    return (
      <div className="about-section my-5" id="about">
        <MDBContainer className="py-5">
          <h1 className="display-4 d-flex justify-content-center mb-4" id="about">Sobre mim</h1>
          <MDBRow className="d-flex justify-content-center">
            <img
              src={Avatar}
              className="rounded-circle img-fluid"
              id="avatar"
              alt="Avatar" />
            <div className="about px-md-5 mx-md-5 pt-3">
              <p className="text-center pt-md-5" id="text-about">
                <i className="fa fa-quote-left" /> Carrego o amor pela arte e pela natureza desde
                que me conheço.<br />
                Enxergo cada desenho como uma oportunidade de me expressar através do que amo.<br />
                Neste caminho estou há 20 anos, florescendo como artista, designer e ilustradora.
             </p>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HoverPage;