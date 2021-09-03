import React from "react";
import "./AppDecorator";
import LandingPage from "./views/LandingPage";
import { AppDecorator } from "./AppDecorator";

export default function App() {
  return AppDecorator({})(function _App() {
    return (
      <React.StrictMode>
        <LandingPage />
      </React.StrictMode>
    );
  });
}