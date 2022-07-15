import { useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";

const People = () => {
    const state = useSelector(state => state);
    const people = state.peopleReducer.people;
    return (
        <ContactList title="People" data={people} />
    );
}

export default People;