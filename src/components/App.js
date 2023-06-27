import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
