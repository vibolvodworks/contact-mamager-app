import SocialLink from "./SocialLink";
import './Profile.css';

const Profile = ({data}) => {
    return (
        <div className="col-xl-3">
            <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <h2>{data.name}</h2>
                    <h3>{data.company}, {data.position}</h3>
                    <SocialLink links = {data.social_networks} />
                    <h3>{data.city}</h3>
                    {data.isContact && <button className="delete">Remove From Contacts</button>}
                    {!data.isContact && <button className="add">Add to Contacts</button>}
                    {(!data.isFavourite && data.isContact) && <button className="add">Add to favourites</button>}
                </div>
            </div>
        </div>
    );
}

export default Profile;