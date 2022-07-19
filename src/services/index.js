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

export const UpdatePeople = async (id, updateData, dispatch) => {
    const reponse = await axios
    .patch(FIREBASE_URL + "people/"  + id + ".json", updateData)
    .catch((err) => {
        dispatch(ErrorPeople(err));
        console.log("Err", err);
    });

    dispatch(PatchPeople(reponse.data));
}