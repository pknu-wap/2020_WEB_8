import React, { Fragment, useState, useCallback, useEffect } from "react";
import {
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Form,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT_REQUEST } from "../redux/types";
import RegisterModal from "./auth/RegisterModal";


const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, userRole } = useSelector(
    (state) => state.auth
  );
  console.log(userRole, "UserRole");
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);
  useEffect(() => {
    setIsOpen(false);
  }, [user]);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const addPostClick = () => {};

  const authLink = (
    <Fragment>
      <NavItem>
        {userRole === "User" ? (
          <Form className="col mt-2">
            <Link to="post" onClick={addPostClick}>
              <Button outline color="light" className="px-3" block>
                <strong>게시물 작성</strong>
              </Button>
            </Link>
          </Form>
        ) : (
          ""
        )}
      </NavItem>
      <NavItem className="d-flex justify-content-center">
        <Form className="col mt-2">
          {user && user.name ? (
            <Link>
              <Button outline color="light" className="px-3" block>
                <strong>{user ? `어서오세요 ${user.name}님` : ""}</strong>
              </Button>
            </Link>
          ) : (
            <Button outline color="light" className="px-3" block>
              <strong>No User</strong>
            </Button>
          )}
        </Form>
      </NavItem>
      <NavItem>
        <Form className="col">
          <Link onClick={onLogout} to="#">
            <Button outline color="light" className="mt-2" block>
              Logout
            </Button>
          </Link>
        </Form>
      </NavItem>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );


  return (
    <Fragment>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
      <Container>
          <Link to="/" className="text-white text-decoration-none">
            여개어때
          </Link>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-felx justify-content-around" navbar>
            {isAuthenticated ? authLink : guestLink}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
export default AppNavbar;
