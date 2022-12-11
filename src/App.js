import React from "react";
import { RouterProvider } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { router } from "./Routes/Router";
function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
