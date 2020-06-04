import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import Header from './header';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import '../css/App.scss'; 

const Layout = ({ children }) => {
    return ( 
        <>  

            <Helmet>
                <title>Neela</title> 
                <meta name="description" content="Neela" />  
                <link rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                
            </Helmet>
            
            <Header />

            {children}
            <ScrollUpButton />
        </>
    );
}
 
export default Layout;