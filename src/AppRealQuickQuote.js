import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeaderQuickQuote from "./Components/RealQuickquote/Header";

const AppRealQuickQuote = () => {
  document.body.classList.add("quickquotebody");
  return (
    <div>
      <HeaderQuickQuote />
    </div>
  );
};

export default AppRealQuickQuote;
