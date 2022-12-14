import { useEffect } from "react";
import { useState } from "react";
import "../App.css";

export default function Bill() {
  const [kWH, setKWH] = useState("0");
  const pricePerKWH = 0.01;
  const [ipAddress, setIpAddress] = useState("");
  const [reciept, setReciept] = useState("");
  const stationNum = 1;
  const customerOwes = currencyFormat(pricePerKWH * kWH);

  function currencyFormat(num) {
    return "$" + num.toFixed(2);
  }

  // useEffect(() => {
  //   //GET DATA FROM API
  //   fetch(`https://api.sampleapis.com/coffee/hot`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setReciept(data);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }, []);

  return (
    <>
      <h2 className="Your-Bill">Your Bill</h2>
      <div className="">
        <h3>Station: {stationNum}</h3>
        <h3>Energy Used: {kWH} kw/h</h3>
        <h3>Cost per kw/h: $0.01 </h3>
        <h3>You Pay: {customerOwes}</h3>
      </div>
    </>
  );
}
