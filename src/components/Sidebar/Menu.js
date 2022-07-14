import { NavLink } from "react-router-dom";
const Menu = (props) => {
    return (
        <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="home">
                    <i className="bi bi-house-door"></i>
                    <span>Home</span>
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="contacts">
                    <i className="bi bi-envelope"></i>
                    <span>Contacts</span>
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="favourites">
                    <i className="bi bi-heart"></i>
                    <span>Favourites</span>
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="people">
                    <i className="bi bi-person"></i>
                    <span>People</span>
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link collapsed" to="companies">
                    <i className="bi bi-briefcase"></i>
                    <span>Companies</span>
                </NavLink>
            </li>

        </ul>
    );
}
export default Menu;