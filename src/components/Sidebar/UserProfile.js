const UserProfile = (props) => {
    return (
        <div className="profile">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                <h2>Jonh Doe</h2>
                <h3>SunScrip, CEO</h3>
            </div>
        </div>
    );
}

export default UserProfile;