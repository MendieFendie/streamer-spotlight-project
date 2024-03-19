import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import StreamerPage from "./pages/StreamerPage/StreamerPage";
import Header from "./components/Header/Header";
import UserIdCheck from "./functions/LocalStorageUserID/UserIdCheck";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/About/About";

function App() {
  useEffect(() => {
    UserIdCheck();
  }, []);
  return (
    <div class="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="streamers/:streamerId" element={<StreamerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
