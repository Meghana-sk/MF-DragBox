import { CENTER, BOTTOM_RIGHT, OTHER_POSITION } from "../variables/types";
const positionReducer = (state, action) => {
  switch (action.type) {
    case CENTER:
      return {
        ...state,
        position: action.payload,
        coordinates: { x: 0, y: 0 },
      };
    case BOTTOM_RIGHT:
      return {
        ...state,
        position: action.payload,
        coordinates: { x: 0, y: 0 },
      };
    case OTHER_POSITION:
      console.log("***", action.values);
      return { ...state, position: action.payload, coordinates: action.values };
    default:
      return state;
  }
};

export { positionReducer };
