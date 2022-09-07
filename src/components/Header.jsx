import { useState, useEffect } from "react";
import "./header.css";
const Header = () => {
  const clock = new Date();
  const date = `${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`;
  return (
    <nav className="header">
      <h3>Position</h3>
      <div>
        <input type="radio" name="position-center" id="position-center" />
        <label htmlFor="position-center">Center</label>
      </div>
      <div>
        <input
          type="radio"
          name="position-lower-right"
          id="position-lower-right"
        />
        <label htmlFor="position-lower-right">Lower right</label>
      </div>
      <div>{date}</div>
    </nav>
  );
};

export { Header };
