import "./Search.css";
import { connect } from "react-redux";
import { FilterPeople } from "../../redux/actions/PeopleAction";
import { useDispatch } from "react-redux";

const Search = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="col-xl-3">
            <div className="search-bar">
                <div className="search-form d-flex align-items-center">
                    <input
                        onChange={(e) => dispatch(props.FilterPeople(props.people, e.target.value.toLowerCase()))}
                        type="text"
                        name="query"
                        placeholder="Search"
                        className="form-control"
                        title="Enter search keyword"
                    />
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    people: state.peopleReducer.people,
    searchTerm: ''
});

export default connect(mapStateToProps, { FilterPeople })(Search);