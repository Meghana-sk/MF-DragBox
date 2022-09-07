import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let timeVal = new Date();
      setTime(timeVal.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h3 id="time">{time}</h3>
    </>
  );
};

export { DigitalClock };
