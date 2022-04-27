import React from 'react'
import pic from './my_pic.jpg'
import './Header.css'


export default function Header() {
    
  return (
    <>
        <div className="headere">
          <div className="header_lefte">Edvora</div>
          <div className="header_righte">
            <img src={pic} alt="" />
            <div className="header_right_namee">
              Akash Sirohi
            </div>
          </div>
        </div>
    </>
  )
}
