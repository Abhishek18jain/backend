import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home.js";
import TextCheck from "./page/TextCheck.js";
import ImageCheck from "./page/ImageCheck.js";
import SourceCheck from "./page/SourceCheck.js";
import Result from "./page/Result.js";
import History from "./page/History.js";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/text-check" element={<TextCheck />} />
      <Route path="/image-check" element={<ImageCheck />} />
      <Route path="/source-check" element={<SourceCheck />} />
      <Route path="/result" element={<Result />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default RoutesPage;
