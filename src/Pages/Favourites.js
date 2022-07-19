import ContactList from "../components/ContactList/ContactList";
import {useSelector } from "react-redux";

const Favourites = () => {
    const state = useSelector(state => state);
    const favourites = state.peopleReducer.people.filter((person) => person.isFavourite);
    return (
        <ContactList title="Favourites" data={favourites} />
    );
}

export default Favourites;