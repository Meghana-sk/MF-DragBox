import { useContext, createContext, useReducer } from "react";
import { positionReducer } from "../reducers/positionReducer";

const BoxPositionContext = createContext(null);

const BoxPositionProvider = ({ children }) => {
  const [boxPositionState, boxPositionChangeDispatch] = useReducer(
    positionReducer,
    {
      position: "center",
      coordinates: { x: 0, y: 0 },
    }
  );
  return (
    <BoxPositionContext.Provider
      value={{ boxPositionState, boxPositionChangeDispatch }}
    >
      {children}
    </BoxPositionContext.Provider>
  );
};

const useBoxPosition = () => useContext(BoxPositionContext);

export { BoxPositionProvider, useBoxPosition };
