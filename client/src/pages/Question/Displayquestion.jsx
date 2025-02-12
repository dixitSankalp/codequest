import React from "react";
import Leftsidebar from "../../Comnponent/Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Comnponent/Rightsidebar/Rightsidebar";
import Questiondetails from "./Questiondetails";
const Displayquestion = ({ slidein }) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <Questiondetails />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Displayquestion;
