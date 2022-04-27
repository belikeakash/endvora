import React from "react";
import { Link } from "react-router-dom";
import './Headerleft.css'

export default function Headerleft() {
  return (
    <div>
      
        <div className="header_left">
          <div className="header_left_div"> <Link to='/'>Nearest Rides</Link>  </div>
          <div className="header_left_div"> <Link to='/up'>Upcoming Rides</Link> </div>
          <div className="header_left_div"> <Link to='/pre'>Past Rides</Link> </div>
        </div>
    </div>
  );
}
