import Draggable from "react-draggable";

const DraggableBox = () => {
  return (
    <>
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        // onDrag={() => {}}
        // onStop={() => {}}
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </>
  );
};

export { DraggableBox };
