import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import StreamerPage from "./pages/StreamerPage/StreamerPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:streamerId" element={<StreamerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
