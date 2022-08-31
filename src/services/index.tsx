import { FIREBASE_URL } from "../Config";
import axios from "axios";
import { Dispatch } from "redux";
import { IPerson } from "../interface";
import {
  ErrorPeople,
  PatchPeople,
  GetPeople,
} from "../redux/actions/PeopleAction";

export const FetchPeople = async (dispatch: Dispatch) => {
  const response = await axios
    .get<IPerson[]>(FIREBASE_URL + "people.json");
  let people: Array<IPerson> = [];
  Object.entries(response.data).forEach(([index, value]) => {
    people.push({ ...value, key: index });
  });
  dispatch(GetPeople(people));
};

export const UpdatePeople = async (people: IPerson[], key: string | undefined, updateData: IPerson, dispatch: Dispatch) => {
  delete updateData.key;
  const reponse = await axios
    .put<IPerson>(FIREBASE_URL + "people/" + key + ".json", updateData);
  let peopleUpdated = people.map((person) => {
    if (person.id === reponse.data.id) {
      return reponse.data;
    }
    return person;
  });

  dispatch(PatchPeople(peopleUpdated));
};

export const CreatePeople = async (userInput: IPerson, dispatch: Dispatch) => {
  await axios.post(FIREBASE_URL + "people.json", userInput).catch((err) => {
    dispatch(ErrorPeople(err));
    console.log("Err", err);
  });

  FetchPeople(dispatch);
};
