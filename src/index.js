import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <PlayerList />
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
