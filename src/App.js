import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage, Page2 } from "./screens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
