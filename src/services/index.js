import {FIREBASE_URL } from '../Config';
import axios from "axios";
import { ErrorPeople, PatchPeople, GetPeople } from '../redux/actions/PeopleAction';

export const FetchPeople = async (dispatch) => {

    const response = await axios
        .get(FIREBASE_URL + "people.json")
        .catch((err) => {
            dispatch(ErrorPeople(err));
            console.log("Err", err);
        });
    dispatch(GetPeople(response.data));
}

export const UpdatePeople = async (people, updateData, dispatch) => {
    let peopleUpdated = people.map((person) => {
        if (person.id === updateData.id) {
            return updateData;
        }
        return person;
    });
    const reponse = await axios
    .put(FIREBASE_URL + "people.json", peopleUpdated)
    .catch((err) => {
        dispatch(ErrorPeople(err));
        console.log("Err", err);
    });

    dispatch(PatchPeople(reponse.data));
}