import Search from "./Search";
import HeaderNav from "./HeaderNav";
import "./Header.css";

const Header = () => {
    return (
        <div className="header row">
            <Search />
            <HeaderNav />
        </div>
    );
}

export default Header;