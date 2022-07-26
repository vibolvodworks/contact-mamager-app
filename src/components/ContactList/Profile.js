import SocialLink from "./SocialLink";
import './Profile.css';
import { UpdatePeople } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = ({ listTypeClass, data }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const navigate = useNavigate();
    const people = state.peopleReducer.people;
    const onRemoveContact = () => {
        let updateData = data;
        updateData['isContact'] = false;
        UpdatePeople(people, data.key, updateData, dispatch);
    }

    const onAddContact = () => {
        let updateData = data;
        updateData['isContact'] = true;
        UpdatePeople(people, data.key, updateData, dispatch);
    }

    const onRemoveFavourite = () => {
        let updateData = data;
        updateData['isFavourite'] = false;
        UpdatePeople(people, data.key, updateData, dispatch);
    }

    const onAddFavourite = () => {
        let updateData = data;
        updateData['isFavourite'] = true;
        UpdatePeople(people, data.key, updateData, dispatch);
    }

    const onUpdateContact = () => {
        navigate("/people/create", {state: data})
    }

    return (
        <div className={"col-xl-3 " + listTypeClass} >
            <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <h2>{data.name}</h2>
                    <h3>{data.company}, {data.position}</h3>
                    <SocialLink links={data.social_networks} />
                    <h3>{data.city}</h3>
                    {data.isContact && <button onClick={onRemoveContact} className="delete">Remove From Contacts</button>}
                    {!data.isContact && <button onClick={onAddContact} className="add">Add to Contacts</button>}
                    {data.isFavourite && <button onClick={onRemoveFavourite} className="delete">Remove From Favourites</button>}
                    {(!data.isFavourite && data.isContact) && <button onClick={onAddFavourite} className="add">Add to favourites</button>}
                    <button onClick={onUpdateContact} className="add">Updatae Contact</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;