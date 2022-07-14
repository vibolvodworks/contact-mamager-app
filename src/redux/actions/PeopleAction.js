import { ActionTypes } from "../constants/ActionTypes"


export const AddToContact = (people) => {
    return {
        type : ActionTypes.ADD_CONTACT,
        payload : people
    };
};

export const RemoveContact = (people) => {
    return {
        type : ActionTypes.REMOVE_CONTACT,
        payload : people
    };
};

export const AddToFavourite = (people) => {
    return {
        type : ActionTypes.ADD_FAVOURITE,
        payload : people
    };
};

export const RemoveFavourite = (people) => {
    return {
        type : ActionTypes.REMOVE_FAVOURITE,
        payload : people
    };
};