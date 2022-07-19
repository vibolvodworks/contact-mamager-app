import { ActionTypes } from "../constants/ActionTypes"


export const FilterPeople = (payload) => {
    return {
        type: ActionTypes.FILTER_PEOPLE,
        payload : payload
    };
};

export const PatchPeople = (payload) => {
    return {
        type: ActionTypes.UPDATE_PEOPLE,
        payload : payload
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