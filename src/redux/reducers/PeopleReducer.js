import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    people: [],
    filterPeople: [],
    searchTerm: '',
    location: '',
    loading: true,
}

export const PeopleReducer = (state = initialState, { type, payload = [] }) => {
    switch (type) {
        case ActionTypes.GET_PEOPLE:
            return {
                ...state,
                people: payload,
                filterPeople: payload,
                loading: false
            };
        case ActionTypes.FILTER_PEOPLE:
            return {
                ...state,
                filterPeople: payload.people,
                searchTerm: payload.searchTerm,
                loading: false
            };
        case ActionTypes.FILTER_PEOPLE_BY_LOCATION:
            return {
                ...state,
                filterPeople: payload.people,
                location: payload.location,
                loading: false
            };
        case ActionTypes.UPDATE_PEOPLE:
            return {
                ...state,
                people: payload,
                filterPeople: payload,
                loading: false
            };
        case ActionTypes.PEOPLE_ERROR:
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    };
};