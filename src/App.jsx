import React from "react";
import AppRoutes from "./AppRoutes";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
<AppRoutes/>
    </div>
  );
}

export default App;
