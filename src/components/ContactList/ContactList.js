import React from "react";
import ListHeader from "./ListHeader";
import ListProfile from "./ListProfile";

const ContactList = ({title, data}) => {
    return (
        <React.Fragment>
            <ListHeader title={title} />
            <ListProfile data={data} />
        </React.Fragment>
    );
}

export default ContactList;