import { useNavigate } from "react-router";
const Page2 = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <nav>
        <h2>Page2</h2>
      </nav>
      <main className="main-content">
        <p>
          Hey there! Iam Meghana, a frontend developer. I enjoy developing UI
          screens and layouts. I have experience in working in a project where
          UI for electrocardiograph was developed from scratch. Currently
          exploring Typescript, Node js. I also experience with C++.{" "}
        </p>
      </main>
      <footer>
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          back
        </button>
      </footer>
    </div>
  );
};

export { Page2 };
