import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import React, {useEffect} from "react";
import { FetchPeople } from "./services";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    FetchPeople(dispatch);
  });
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
