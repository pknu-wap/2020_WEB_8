import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNavbar from "../components/AppNavbar";

const MyRouter = () => (
    <Fragment>
        <Header/>
        <AppNavbar/> 
            <h1>Hello body</h1>          
        <Footer/>
    </Fragment>
)
    
export default MyRouter;