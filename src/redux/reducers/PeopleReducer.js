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
                loading: false,
                people: payload
            }
        case ActionTypes.GET_FAVOURITES:
            return {
                loading: false,
                people: payload
            }

        default:
            return state;
    };
};