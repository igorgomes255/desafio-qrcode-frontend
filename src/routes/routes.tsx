import { Route, Routes } from "react-router-dom";
import { GeneratePage } from "../pages/Generate";
import { UserPage } from "../pages/UserPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/generate" element={<GeneratePage />} />
      <Route path="/:user" element={<UserPage />} />
    </Routes>
  );
};

export { RoutesMain };
