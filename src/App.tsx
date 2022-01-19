import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicAnimation from "./components/BasicAnimation";
import DeepAnimation from "./components/DeepAnimation";
import SharedLayout from "./components/SharedLayout";
import Slider from "./components/Slider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicAnimation />} />
        <Route path="/deep" element={<DeepAnimation />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/animatesharedlayout" element={<SharedLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
