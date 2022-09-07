import Draggable from "react-draggable";
import { useState } from "react";
import "../../screens/screens-styles.css";
import "./draggableBox.css";
import { useBoxPosition } from "../../context/boxPosition-context";
import { OTHER_POSITION } from "../../variables/types";

const DraggableBox = () => {
  const [showPosition, setShowPosition] = useState({ x: 0, y: 0 });
  const { boxPositionState, boxPositionChangeDispatch } = useBoxPosition();
  const updateBoxPosition = (data) => {
    boxPositionChangeDispatch({
      type: OTHER_POSITION,
      payload: "other",
      values: { x: data.x, y: data.y },
    });
  };
  return (
    <>
      <div
        className={`drag-box ${
          boxPositionState.position === "center" ? "center" : "bottom-right"
        }`}
      >
        <Draggable
          handle=".drag"
          defaultPosition={showPosition}
          position={boxPositionState.coordinates}
          onDrag={(e, data) => updateBoxPosition(data)}
          onStop={() => setShowPosition(boxPositionState.coordinates)}
        >
          <div className="drag drag-container">
            <div className="position-label">
              {boxPositionState.position === "center" ||
              boxPositionState.position === "bottom-right"
                ? boxPositionState.position
                : "Floating..."}
            </div>
            <div className="dragme-label">Drag me around...</div>
          </div>
        </Draggable>
      </div>
    </>
  );
};

export { DraggableBox };
