import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App({ authService }) {
  return (
    <div class={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path={"/"}
            element={<Login authService={authService} />}
          />
          <Route
            path={"/maker"}
            element={<Maker authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
