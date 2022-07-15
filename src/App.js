import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { ActionTypes } from "./redux/constants/ActionTypes";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {FIREBASE_URL} from "./Config";

function App() {
  const dispatch = useDispatch();
  const fetchPeople = async () => {
    const response = await axios
      .get(FIREBASE_URL + "people.json")
      .catch((err) => {
        dispatch({
          type: ActionTypes.PEOPLE_ERROR,
          payload: err,
        })
        console.log("Err", err);
      });

    let people = response.data;
    let contacts = people.filter((person) => person.isContact);
    let favourites = people.filter((person) => person.isFavourite);
    dispatch({
      type: ActionTypes.GET_CONTACTS,
      payload: contacts
    });
    dispatch({
      type: ActionTypes.GET_FAVOURITES,
      payload: favourites
    });
    dispatch({
      type: ActionTypes.GET_PEOPLE,
      payload: people
    });
    dispatch({
      type: ActionTypes.GET_PEOPLE,
      payload: response.data
    });
  };
  useEffect(() => {
    fetchPeople();
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
