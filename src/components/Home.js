import React, { useEffect, useState } from "react";

import Filter from "./Filter";
import "./Home.css";
import Ride from "./Ride";

export default function Home() {
  let [product, setProduct] = useState(null);
  let [popButton, setPopButton] = useState(false);
  let [comedata,setComedata] = useState({});
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
      
        <div className="header">
      

          <div className="header_right">
            <div className="filter_right">
              <button onClick={popFunc}>Filter</button>
              <Filter trigger={popButton} filterInfo={filterInfo} />
            </div>
          </div>
        </div>

        {product.map((item) => {
          
          if(comedata.state=="" && comedata.city==""){
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
        else if(!popButton) {
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
        else if(item.state.toLowerCase().includes(comedata.state) && item.city.toLowerCase().includes(comedata.city)) {
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
        })} 
      </>
    );
  }
}
