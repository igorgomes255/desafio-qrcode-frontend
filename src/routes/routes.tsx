import { Route, Routes } from "react-router-dom";
import { GeneratePage } from "../pages/Generate";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/generate" element={<GeneratePage />} />
    </Routes>
  );
};

export { RoutesMain };
