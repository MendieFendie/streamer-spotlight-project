import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:streamerId" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
