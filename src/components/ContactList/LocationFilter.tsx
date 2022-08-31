import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { IPerson, IState } from "../../interface";
import { FilterPeopleByLocation } from "../../redux/actions/PeopleAction";

interface IProps {
  people: IPerson[];
  FilterPeopleByLocation: (
    people: IPerson[],
    location: string
  ) => IFilterReturn;
}

interface IPayload {
  location: string;
  people: IPerson[];
}

interface IFilterReturn {
  type: string;
  payload: IPayload;
}

const LocationFilter: React.FC<IProps> = ({
  people,
  FilterPeopleByLocation,
}) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state);
  // remove duplicate location
  const cities = [...state.peopleReducer.people.map((person) => person.city)];
  const locations = cities.filter((city, index) => {
    return cities.indexOf(city) === index;
  });

  return (
    <div className="col-xl-2">
      <div className="location-filter">
        <i className="bi bi-geo-alt-fill"></i>
        <div className="location-info">
          <select
            onChange={(e) =>
              dispatch(FilterPeopleByLocation(people, e.target.value))
            }
          >
            <option value="">All</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  people: state.peopleReducer.people,
  location: "",
});

export default connect(mapStateToProps, { FilterPeopleByLocation })(
  LocationFilter
);
