import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
    <div className="row">
      <Sidebar />
      <main id="main" className="main col-xl-10">
        <Header />
        <Outlet />
      </main>
    </div>
  </div>
  );
}

export default App;
