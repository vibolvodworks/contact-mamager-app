import "./Search.css";
import { connect } from "react-redux";
import { FilterPeople } from "../../redux/actions/PeopleAction";
import { useDispatch } from "react-redux";
import React from "react";
import { IPerson, IState } from "../../interface";

interface IProps {
  people: IPerson[];
  FilterPeople: (people: IPerson[], searchTerm: string) => IFilterReturn;
}

interface IPayload {
  searchTerm: string;
  people: IPerson[];
}

interface IFilterReturn {
  type: string;
  payload: IPayload;
}

const Search: React.FC<IProps> = ({ people, FilterPeople }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-xl-3">
      <div className="search-bar">
        <div className="search-form d-flex align-items-center">
          <input
            onChange={(e) =>
              dispatch(FilterPeople(people, e.target.value.toLowerCase()))
            }
            type="text"
            name="query"
            placeholder="Search"
            className="form-control"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  people: state.peopleReducer.people,
  searchTerm: "",
});

export default connect(mapStateToProps, { FilterPeople })(Search);
