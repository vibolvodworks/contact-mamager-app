import { ActionTypes } from "../constants/ActionTypes"
import {IPerson} from "../../interface";


export const FilterPeople = (people: IPerson[], searchTerm: string) => {
    return {
        type: ActionTypes.FILTER_PEOPLE,
        payload: {
            searchTerm: searchTerm,
            people: searchTerm === '' ? people : people.filter((person) => {
                return person.name.toLowerCase().includes(searchTerm)
                    || person.company.toLowerCase().includes(searchTerm)
                    || person.position.toLowerCase().includes(searchTerm)
            })
        }
    };
};

export const FilterPeopleByLocation = (people: IPerson[], location: string) => {
    return {
        type: ActionTypes.FILTER_PEOPLE_BY_LOCATION,
        payload: {
            location: location,
            people: location === '' ? people : people.filter((person) => {
                return person.city === location
            })
        }
    };
};

export const PatchPeople = (payload: IPerson | Object) => {
    return {
        type: ActionTypes.UPDATE_PEOPLE,
        payload: payload
    };
};

export const CreatePeople = (payload: IPerson) => {
    return {
        type: ActionTypes.CREATE_PEOPLE,
        payload: payload
    };
};

export const GetPeople = (payload: IPerson | Object) => {
    return {
        type: ActionTypes.GET_PEOPLE,
        payload: payload
    };
};

export const ErrorPeople = (error: Object) => {
    return {
        type: ActionTypes.GET_PEOPLE,
        payload: error
    };
};