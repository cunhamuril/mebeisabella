import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

import './Contact.css'

const ContactPage = () => {
    return (

        <div className="contact-section" id="contact">
            <MDBContainer>
                <h1 className="display-4 text-center my-5 py-5">
                    Entre em Contato
            </h1>
                <p className="text-center w-responsive mx-auto pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
                <MDBRow>
                    <MDBCol className="md-0 mb-5">
                        <form>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="md-form mb-0 contact-input">
                                        <MDBInput                                           
                                            type="text" 
                                            id="contact-name"                                            
                                            label="Nome" 
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="md-form mb-0 contact-input">
                                        <MDBInput                                            
                                            type="text"
                                            id="contact-email"                                            
                                            label="E-mail"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="md-form mb-0 contact-input">
                                        <MDBInput                                              
                                            type="text" 
                                            id="contact-subject"                                            
                                            label="Assunto"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="md-form mb-0 contact-input">
                                        <MDBInput                                            
                                            type="textarea"
                                            id="contact-message"                                            
                                            label="Mensagem"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </form>
                        <div className="text-center text-md-left">
                            <MDBBtn color="deep-orange lighten-2" size="md">
                                Enviar
                        </MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default ContactPage;