import React,{useContext} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/style.css";
import {UserContext} from '../contexts/UserContext'

function MainHeader() {
  const  {logged_in, user, baseUrl} = useContext(UserContext);
  return (
    <div>
      {/* {logged_in == true ? */}
      <Navbar user={user} />
      {/* :
      ""
          } */}

      {/* This element will render either <DashboardMessages> when the URL is
                "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
            */}
      {/* <div className="container"> */}
      <section className="container">
        <Outlet />
      </section>
      {/* </div> */}

      {/* {logged_in == true ? */}
      <section>
      <Footer />
    </section>
      {/* :
      ""
          } */}
      
      
    </div>
  );
}

export default MainHeader;
