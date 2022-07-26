import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePeople, UpdatePeople } from "../services";
import { useNavigate, useLocation } from "react-router-dom";

const CreatePeopleForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dataForUpdate = location.state;
    const isEdit = dataForUpdate !== null;
    const state = useSelector(state => state);
    const people = state.peopleReducer.people;

    const dispatch = useDispatch();
    const [name, setName] = useState(dataForUpdate !== null ? dataForUpdate.name : "");
    const [city, setCity] = useState(dataForUpdate !== null ? dataForUpdate.city : "");
    const [company, setCompany] = useState(dataForUpdate !== null ? dataForUpdate.company : "");
    const [position, setPosition] = useState(dataForUpdate !== null ? dataForUpdate.position : "");
    const [facebook, setFacebook] = useState(dataForUpdate !== null ? dataForUpdate.social_networks.facebook : "");
    const [linkedin, setLinkedin] = useState(dataForUpdate !== null ? dataForUpdate.social_networks.linkedin : "");
    const [twitter, setTwitter] = useState(dataForUpdate !== null ? dataForUpdate.social_networks.twitter : "");
    const [instagram, setInstagram] = useState(dataForUpdate !== null ? dataForUpdate.social_networks.instagram : "");
    const [isContact, setIsContact] = useState(dataForUpdate !== null ? dataForUpdate.isContact : false);
    const [isFavourite, setIsFavourite] = useState(dataForUpdate !== null ? dataForUpdate.isFavourite : false);

    const onChangeNameHandler = (event) => {
        setName(event.target.value);
    }

    const onChangeCityHandler = (event) => {
        setCity(event.target.value);
    }

    const onChangeCompanyHandler = (event) => {
        setCompany(event.target.value);
    }

    const onChangePostionHandler = (event) => {
        setPosition(event.target.value);
    }

    const onChangeFacebookHandler = (event) => {
        setFacebook(event.target.value);
    }

    const onChangeLinkedinHandler = (event) => {
        setLinkedin(event.target.value);
    }

    const onChangeTwitterHandler = (event) => {
        setTwitter(event.target.value);
    }

    const onChangeInstagramHandler = (event) => {
        setInstagram(event.target.value);
    }

    const onChangeIsContactHandler = (event) => {
        console.log(event.target.checked, 'ss');
        setIsContact(event.target.checked);
    }

    const onChangeIsFavouriteHandler = (event) => {
        setIsFavourite(event.target.checked);
    }

    const onSumbitHandler = (event) => {
        event.preventDefault();
        const userInput = {
            "avatar": "link",
            "city": city,
            "company": company,
            "id": isEdit ? dataForUpdate.id :  Math.random().toString(),
            "isContact": isContact,
            "isFavourite": isFavourite,
            "name": name,
            "position": position,
            "social_networks": {
                "facebook": facebook,
                "instagram": instagram,
                "linkedin": linkedin,
                "twitter": twitter
            }
        }
        console.log(userInput, 'input');
        if(isEdit) {
            UpdatePeople(people, dataForUpdate.key, userInput, dispatch);
        } else {
            CreatePeople(userInput, dispatch);
        }
        navigate("/people");
    }

    return (
        <form onSubmit={onSumbitHandler}>
            <div className="form-group">
                <label>Name</label>
                <input value={name} onChange={onChangeNameHandler} type="text" required className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label>City</label>
                <input value={city} onChange={onChangeCityHandler} type="text" required className="form-control" id="city" />
            </div>
            <div className="form-group">
                <label>Company</label>
                <input value={company} onChange={onChangeCompanyHandler} type="text" required className="form-control" id="company" />
            </div>
            <div className="form-group">
                <label>Position</label>
                <input value={position} onChange={onChangePostionHandler} type="text" required className="form-control" id="position" />
            </div>
            <div className="form-group">
                <label>Facebook</label>
                <input value={facebook} onChange={onChangeFacebookHandler} type="text" required className="form-control" id="faceobook" />
            </div>
            <div className="form-group">
                <label>Linkedin</label>
                <input value={linkedin} onChange={onChangeLinkedinHandler} type="text" required className="form-control" id="linkedin" />
            </div>
            <div className="form-group">
                <label>Instagram</label>
                <input value={instagram} onChange={onChangeInstagramHandler} type="text" required className="form-control" id="instagram" />
            </div>
            <div className="form-group">
                <label>Twitter</label>
                <input value={twitter} onChange={onChangeTwitterHandler} type="text" required className="form-control" id="twitter" />
            </div>
            <div className="form-check">
                <input checked={isContact} onChange={onChangeIsContactHandler} type="checkbox" className="form-check-input" id="is-contact" />
                <label className="form-check-label">Is Contact</label>
            </div>
            <div className="form-check">
                <input checked={isFavourite} onChange={onChangeIsFavouriteHandler} type="checkbox" className="form-check-input" id="is-favourite" />
                <label className="form-check-label">Is Favourite</label>
            </div>
            <button type="submit" className="btn btn-primary">{isEdit ? "Upate": "Create"} </button>
        </form>
    );
}

export default CreatePeopleForm;