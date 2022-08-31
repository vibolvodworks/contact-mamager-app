import ContactList from "../components/ContactList/ContactList";
import { CONTACTS } from "../constants";
import React from "react";

const Contacts: React.FC = () => {

    return (
        <ContactList title={CONTACTS} />
    );
}

export default Contacts;