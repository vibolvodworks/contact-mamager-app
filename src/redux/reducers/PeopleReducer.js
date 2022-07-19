import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    people: [],
    loading: true,
}

export const PeopleReducer = (state = initialState, { type, payload = [] }) => {
    switch (type) {
        case ActionTypes.GET_PEOPLE:
            return {
                ...state,
                people: payload,
                loading: false
            };
        case ActionTypes.FILTER_PEOPLE:
            return {
                ...state,
                people: payload,
                loading: false
            };
        case ActionTypes.UPDATE_PEOPLE:
            let peopleUpdated = state.people.map((person) => {
                if (person.id === payload.id) {
                    return payload;
                }
                return person;
            });
            return {
                ...state,
                people: peopleUpdated,
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