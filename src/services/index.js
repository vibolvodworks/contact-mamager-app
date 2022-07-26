import { FIREBASE_URL } from '../Config';
import axios from "axios";
import { ErrorPeople, PatchPeople, GetPeople } from '../redux/actions/PeopleAction';

export const FetchPeople = async (dispatch) => {

    const response = await axios
        .get(FIREBASE_URL + "people.json")
        .catch((err) => {
            dispatch(ErrorPeople(err));
            console.log("Err", err);
        });
    let people = [];
    Object.entries(response.data).forEach(([index, value]) => {
        people.push({ ...value, key: index });
    });
    dispatch(GetPeople(people));
}

export const UpdatePeople = async (people, key, updateData, dispatch) => {
    delete updateData.key;
    const reponse = await axios
        .put(FIREBASE_URL + "people/" + key + ".json", updateData)
        .catch((err) => {
            dispatch(ErrorPeople(err));
            console.log("Err", err);
        });

    let peopleUpdated = people.map((person) => {
        if (person.id === reponse.data.id) {
            return reponse.data;
        }
        return person;
    });

    dispatch(PatchPeople(peopleUpdated));
}

export const CreatePeople = async (userInput, dispatch) => {
    await axios
        .post(FIREBASE_URL + "people.json", userInput)
        .catch((err) => {
            dispatch(ErrorPeople(err));
            console.log("Err", err);
        });

    FetchPeople(dispatch);
}