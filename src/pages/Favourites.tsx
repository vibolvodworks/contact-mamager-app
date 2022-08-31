import ContactList from "../components/ContactList/ContactList";
import { FAVOURITES } from "../constants";
import React from "react";

const Favourites: React.FC = () => {
    return (
        <ContactList title={FAVOURITES} />
    );
}

export default Favourites;