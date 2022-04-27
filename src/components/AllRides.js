import React, { useEffect, useState } from "react";

import Filter from "./Filter";
import Header from "./Header";
import Headerleft from "./Headerleft";
import "./Home.css";
import Ride from "./Ride";

export default function AllRides() {
  let flag = false;
  let [product, setProduct] = useState(null);
  let [popButton, setPopButton] = useState(false);
  let [comedata, setComedata] = useState({});
  const filterInfo = (comedata) => {
    setComedata(comedata);
    console.log(comedata);
  };
  let popFunc = () => {
    setPopButton(!popButton);
  };
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/rides")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  if (product) {
    return (
      <>
        <Header />
        <div className="header">
          <Headerleft />

          <div className="header_right">
            <div className="filter_right">
              <div onClick={popFunc}>Filter</div>
            </div>
            <div className="filter_right2">
              <Filter trigger={popButton} filterInfo={filterInfo} />
            </div>
          </div>
        </div>
        {product.map((item) => {
          if (comedata.state == "" && comedata.city == "") {
            flag = true;
            return (
              <>
                <Ride
                  map_url={item.map_url}
                  id={item.id}
                  origin_station_code={item.origin_station_code}
                  station_path={item.station_path}
                  date={item.date}
                  state={item.state}
                  city={item.city}
                />
              </>
            );
          } else if (!popButton) {
            flag = true;
            return (
              <>
                <Ride
                  map_url={item.map_url}
                  id={item.id}
                  origin_station_code={item.origin_station_code}
                  station_path={item.station_path}
                  date={item.date}
                  state={item.state}
                  city={item.city}
                />
              </>
            );
          } else {
            if (
              item.state.toLowerCase().includes(comedata.state) &&
              item.city.toLowerCase().includes(comedata.city)
            ) {
              flag = true;
              return (
                <>
                  <Ride
                    map_url={item.map_url}
                    id={item.id}
                    origin_station_code={item.origin_station_code}
                    station_path={item.station_path}
                    date={item.date}
                    state={item.state}
                    city={item.city}
                  />
                </>
              );
            }
          }
        })}
        
      </>
    );
  }
  else { return (<h1>Loading Please Wait</h1>)}
}
