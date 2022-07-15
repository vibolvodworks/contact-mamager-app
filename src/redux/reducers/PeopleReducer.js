import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    people: [],
    loading: true
}

export const PeopleReducer = (state = initialState, { type, payload = [] }) => {
    switch (type) {
        case ActionTypes.GET_PEOPLE:
            return {
                ...state,
                people: payload,
                loading: false
            };
        case ActionTypes.PEOPLE_ERROR:
            return {
                loading: false,
                error: payload
            }
        case ActionTypes.GET_CONTACTS:
            return {
                ...state,
                loading: false,
                contacts: payload
            }
        case ActionTypes.GET_FAVOURITES:
            return {
                ...state,
                loading: false,
                favourites: payload
            }

        default:
            return state;
    };
};