import React, { Fragment } from "react";
import { Container, Navbar, NavbarToggler, Collapse, Nav  } from "reactstrap";
import {Link} from "react-router-dom";
import LoginModal from "../components/auth/LoginModal";


const AppNavbar = () => (
    //여러 컴포넌트를 넣기 위해서
    <Fragment>
        <Navbar color= "dark" expand="lg" className="sticky-top">
            <Container>
                <Link to="/" className="text-white text-decoration-none" >
                    Side Project
                </Link>
                <NavbarToggler/>
                <Collapse isOpen={true} navbar>
                    <Nav className="at-auto d-flex justify-content-around" navbar>
                        {false ? (
                        <h1 className="text-white">authLink</h1>
                         ) : (
                            <LoginModal/>
                         )}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </Fragment>
);

export default AppNavbar;