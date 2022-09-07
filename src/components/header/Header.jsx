import "./header.css";
import { DigitalClock } from "../../components";
import { useBoxPosition } from "../../context/boxPosition-context";
import { CENTER, BOTTOM_RIGHT } from "../../variables/types";

const Header = () => {
  const { boxPositionState, boxPositionChangeDispatch } = useBoxPosition();
  return (
    <nav className="header">
      <h3>Position</h3>
      <div>
        <input
          type="radio"
          name="position"
          id="position-center"
          value="center"
          checked={boxPositionState.position === "center"}
          onChange={(e) =>
            boxPositionChangeDispatch({
              type: CENTER,
              payload: e.target.value,
            })
          }
        />
        <label htmlFor="position-center">Center</label>
      </div>
      <div>
        <input
          type="radio"
          name="position"
          id="position-lower-right"
          value="bottom-right"
          checked={boxPositionState.position === "bottom-right"}
          onChange={(e) =>
            boxPositionChangeDispatch({
              type: BOTTOM_RIGHT,
              payload: e.target.value,
            })
          }
        />
        <label htmlFor="position-lower-right">Lower right</label>
      </div>
      <div className="key-instructions">
        <span>Press ESC to hide floating block, Enter to show again</span>
      </div>
      <DigitalClock />
    </nav>
  );
};

export { Header };
