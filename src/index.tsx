import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import People from "./pages/People";
import Favourites from "./pages/Favourites";
import Companies from "./pages/Companies";
import { Provider } from "react-redux";
import store from "./redux/store";
import PeopleForm from "./pages/PeopleForm";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<People />} />
            <Route path="/home" element={<People />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/create" element={<PeopleForm />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/companies" element={<Companies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
