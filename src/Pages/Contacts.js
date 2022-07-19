import { useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";

const Contacts = () => {
    const state = useSelector(state => state);
    const contacts = state.peopleReducer.people.filter((person) => person.isContact);
    return (
        <ContactList title="Contacts" data={contacts} />
    );
}

export default Contacts;