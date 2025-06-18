import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="restaurant/:id" element={<Restaurant />} />
      </Route>
    </Routes>
  );
}


export default App;
