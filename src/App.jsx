import "./App.css";
import { ConfigProvider } from "antd";
import Rotas from "./routes/Rotas.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ConfigProvider>
      <Router>
        <Rotas />
      </Router>
    </ConfigProvider>
  );
}

export default App;
