import { useRoutes } from "react-router-dom";
import { routers } from "./routers/dashboard";
import "./app.style.css";

function App() {
  const element = useRoutes(routers);
  return element;
}

export default App;
