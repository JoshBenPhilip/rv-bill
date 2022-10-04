import { useEffect } from "react";
import { useState } from "react";

export default function Bill() {
  const [kWH, setKWH] = useState("100");
  const [pricePerKWH, setPricePerKWH] = useState("0.01");
  const stationNum = 1;
  const customerOwes = currencyFormat(pricePerKWH * kWH);

  function currencyFormat(num) {
    return "$" + num.toFixed(2);
  }

  // useEffect(() => {
  //   //GET DATA FROM API
  //   fetch(`apiUrl`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }, []);

  return (
    <>
      <h2>Your Bill</h2>
      <h3>Station: {stationNum}</h3>
      <h3>Energy Used: {kWH} kw/h</h3>
      <h3>Cost per kw/h: $0.01 </h3>
      <h3>You Pay: {customerOwes}</h3>
    </>
  );
  //   const API_URL = `https://todo-bc-api.web.app/tasks/${item.userId}/${item.id}`;
  // const API_URL = `https://sample.web.app/tasks/${ipAddress}/${kWH}`;
}
