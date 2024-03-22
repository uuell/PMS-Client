import React, { useEffect, useState } from 'react';

import "./parking.css";

export default function Parking({ data }) {
  const [parkingSlices, setParkingSlices] = useState({
    slice1: [],
    slice2: [],
    slice3: [],
    slice4: [],
    slice5: [],
    slice6: [],
    slice7: [],
    slice8: [],
  });

  useEffect(() => {
    const parkingData = data.parkingData;
    if (parkingData){
      setParkingSlices((prev) => ({
        ...prev,
        slice1: parkingData.slice(0, 10),
        slice2: parkingData.slice(10, 20),
        slice3: parkingData.slice(20, 30),
        slice4: parkingData.slice(30, 40),
        slice5: parkingData.slice(40, 50),
        slice6: parkingData.slice(50, 60),
        slice7: parkingData.slice(60, 70),
        slice8: parkingData.slice(70, 80),
      }));
    }
  }, [data.parkingData]);

  return (
    <div className="PMS__parking_container">
      <div className="left-box">
        {parkingSlices.slice1.map((data) => (
          <div key={data.id} className="box" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
            {data.slot_number}
          </div>
        ))}
      </div>

      <div className="center-box">
        <div className="inner-left-container">
          {parkingSlices.slice2.map((data) => (
            <div key={data.id} className="inner-left" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
              {data.slot_number}
            </div>
          ))}
        </div>
        <div className="vertical-line"></div>
        <div className="inner-right-container">
          {parkingSlices.slice3.map((data) => (
            <div key={data.id} className="inner-right" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
              {data.slot_number}
            </div>
          ))}
        </div>
      </div>

      <div className="center-box">
        <div className="inner-left-container">
          {parkingSlices.slice4.map((data) => (
            <div key={data.id} className="inner-left" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
              {data.slot_number}
            </div>
          ))}
        </div>
        <div className="vertical-line"></div>
        <div className="inner-right-container">
          {parkingSlices.slice5.map((data) => (
            <div key={data.id} className="inner-right" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
              {data.slot_number}
            </div>
          ))}
        </div>
      </div>

      <div className="center-box">
        <div className="inner-left-container">
          {parkingSlices.slice6.map((data) => (
            <div key={data.id} className="inner-left" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
              {data.slot_number}
            </div>
          ))}
        </div>
        <div className="vertical-line"></div>
        <div className="inner-right-container">
          {parkingSlices.slice7.map((data) => (
            <div key={data.id} className="inner-right" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
              {data.slot_number}
            </div>
          ))}
        </div>
      </div>

      <div className="right-box">
        {parkingSlices.slice8.map((data) => (
          <div key={data.id} className="box" style={{ backgroundColor: data.reserved || data.parked ? 'red' : '#219c14' }}>
            {data.slot_number}
          </div>
        ))}
      </div>
    </div>
  );
}
