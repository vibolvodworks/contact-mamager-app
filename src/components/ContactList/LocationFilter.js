import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { FilterPeopleByLocation } from "../../redux/actions/PeopleAction";

const LocationFilter = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    // remove duplicate location
    const locations = [...new Set(state.peopleReducer.people.map(person => person.city))];
    return (
        <div className="col-xl-2">
            <div className="location-filter">
                <i className="bi bi-geo-alt-fill"></i>
                <div className="location-info">
                    <select onChange={(e) => dispatch(props.FilterPeopleByLocation(props.people, e.target.value))} >
                        <option value="">All</option>
                        {locations.map(location => <option key={location} value={location}>{location}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    people: state.peopleReducer.people,
    location: ''
});

export default connect(mapStateToProps, { FilterPeopleByLocation })(LocationFilter);