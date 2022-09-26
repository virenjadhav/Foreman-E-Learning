import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "./Footer";
import '../css/style.css'

function MainHeader() {
  return (
          <div>
           <Navbar />
      
            {/* This element will render either <DashboardMessages> when the URL is
                "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
            */}
             {/* <div className="container"> */}
            <Outlet />
            {/* </div> */}
            <Footer />
          </div>
              
  )
}

export default MainHeader;