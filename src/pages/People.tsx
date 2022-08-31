import ContactList from "../components/ContactList/ContactList";
import { PEOPLE } from "../constants";
import React from "react";

const People: React.FC = () => {
    return (
        <ContactList title={PEOPLE} />
    );
}

export default People;