import React, { useState } from "react";
import ListHeader from "./ListHeader";
import ListProfile from "./ListProfile";
import { connect } from "react-redux";
import { GetPeople } from "../../redux/actions/PeopleAction";
import { CONTACTS, FAVOURITES } from "../../constants";
import { IPerson, IState } from "../../interface";

interface IProps {
  title: string;
  people: IPerson[];
}

const ContactList: React.FC<IProps> = ({ title, people }) => {
  const [listType, setListType] = useState<string>("gride");
  const onChangeViewHandler = (displayType: string) => {
    setListType(displayType);
  };
  let contacts: IPerson[] = people;
  switch (title) {
    case CONTACTS:
      contacts = people.filter((person) => person.isContact);
      break;
    case FAVOURITES:
      contacts = people.filter((person) => person.isFavourite);
      break;
    default:
      contacts = people;
      break;
  }

  return (
    <React.Fragment>
      <ListHeader onChangeView={onChangeViewHandler} title={title} />
      <ListProfile listType={listType} data={contacts} />
    </React.Fragment>
  );
};

const mapStateToProps = (state: IState) => ({
  people: state.peopleReducer.filterPeople,
});

export default connect(mapStateToProps, { GetPeople })(ContactList);
