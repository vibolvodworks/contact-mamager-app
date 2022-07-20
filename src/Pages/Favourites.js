import ContactList from "../components/ContactList/ContactList";
import { FAVOURITES } from "../constants";

const Favourites = () => {
    return (
        <ContactList title={FAVOURITES} />
    );
}

export default Favourites;