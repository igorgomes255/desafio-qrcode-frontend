import { Route, Routes, Navigate } from "react-router-dom";
import { GeneratePage } from "../pages/Generate";
import { UserPage } from "../pages/UserPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/generate"} />} />
      <Route path="/generate" element={<GeneratePage />} />
      <Route path="/user/:user" element={<UserPage />} />
    </Routes>
  );
};

export { RoutesMain };
