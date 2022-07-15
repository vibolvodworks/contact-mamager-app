import ContactList from "../components/ContactList/ContactList";
import {useSelector } from "react-redux";

const Favourites = () => {
    const state = useSelector(state => state);
    const favourites = state.peopleReducer.favourites;
    return (
        <ContactList title="Favourites" data={favourites} />
    );
}

export default Favourites;