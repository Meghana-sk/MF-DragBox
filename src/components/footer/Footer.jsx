import { useNavigate } from "react-router";
import "./footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <span
        onClick={() => {
          navigate("/page2", { replace: true });
        }}
      >
        Go to page 2{" "}
      </span>
    </footer>
  );
};

export { Footer };
