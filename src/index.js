import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DarkModeContextProvider } from "./darkmode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <Router>
      <App />
    </Router>
  </DarkModeContextProvider>
);
