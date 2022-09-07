import "./screens-styles.css";
import { useCallback, useState, useEffect } from "react";
import { Header, Footer, DraggableBox } from "../components";

const MainPage = () => {
  const [showFloatingBox, setShowFloatingBox] = useState(true);
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setShowFloatingBox(false);
    }
    if (event.keyCode === 13) {
      setShowFloatingBox(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
  return (
    <div className="page-container">
      <header className="header-container">
        <Header />
      </header>
      <main className="main-content">
        <div className="display"></div>
        {showFloatingBox && <DraggableBox />}
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export { MainPage };
