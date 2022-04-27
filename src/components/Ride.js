import React from "react";
import "./Ride.css";

export default function Ride(props) {
  return (
    <>
      <div className="container">
        <div className="container_image">
          <img src={props.map_url} alt="" />
        </div>
        <div className="container_box">
          <div className="container_box_1">
            <div className="ride_id"> Ride id : {props.id}</div>
            <div className="origin_station">
              Origin Station : {props.origin_station_code}{" "}
            </div>
            <div className="station_container">
              <span className="station_path">
                station_path :
                {props.station_path.map((x) => {
                  return <span className="station_path_no">{x} </span>;
                })}
              </span>
            </div>

            <div className="date">Date : {props.date}</div>
            <div className="distance">Distance : 0km</div>
          </div>
          <div className="container_box_2">
            <div className="state">{props.state}</div>
            <div className="city">{props.city}</div>
          </div>
        </div>
      </div>
    </>
  );
}
