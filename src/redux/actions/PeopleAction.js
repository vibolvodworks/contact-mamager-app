import { ActionTypes } from "../constants/ActionTypes"


export const FilterPeople = (people, searchTerm) => {
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

export const FilterPeopleByLocation = (people, location) => {
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

export const PatchPeople = (payload) => {
    return {
        type: ActionTypes.UPDATE_PEOPLE,
        payload: payload
    };
};

export const CreatePeople = (payload) => {
    return {
        type: ActionTypes.CREATE_PEOPLE,
        payload: payload
    };
};

export const GetPeople = (payload) => {
    return {
        type: ActionTypes.GET_PEOPLE,
        payload: payload
    };
};

export const ErrorPeople = (error) => {
    return {
        type: ActionTypes.GET_PEOPLE,
        payload: error
    };
};