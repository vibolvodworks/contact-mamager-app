import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    people: [],
    filterPeople: [],
    searchTerm: '',
    location: '',
    loading: true,
}

type Payload = {
    people: [],
    filterPeople: [],
    searchTerm: '',
    location: '',
    loading: true,
}

type UserAction = {
    type: String;
    payload: Payload
}

export const PeopleReducer = (state = initialState, userAction: UserAction) => {
    switch (userAction.type) {
        case ActionTypes.GET_PEOPLE:
            return {
                ...state,
                people: userAction.payload,
                filterPeople: userAction.payload,
                loading: false
            };
        case ActionTypes.FILTER_PEOPLE:
            return {
                ...state,
                filterPeople: userAction.payload.people,
                searchTerm: userAction.payload.searchTerm,
                loading: false
            };
        case ActionTypes.FILTER_PEOPLE_BY_LOCATION:
            return {
                ...state,
                filterPeople: userAction.payload.people,
                location: userAction.payload.location,
                loading: false
            };
        case ActionTypes.UPDATE_PEOPLE:
            return {
                ...state,
                people: userAction.payload,
                filterPeople: userAction.payload,
                loading: false
            };
        case ActionTypes.CREATE_PEOPLE:
            return {
                ...state,
                people: userAction.payload,
                filterPeople: userAction.payload,
                loading: false
            };
        case ActionTypes.PEOPLE_ERROR:
            return {
                loading: false,
                error: userAction.payload
            }
        default:
            return state;
    };
};