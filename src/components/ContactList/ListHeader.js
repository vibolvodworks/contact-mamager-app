import "./ListHeader.css";
import ListTypeFillter from "./ListTypeFillter";
import LocationFilter from "./LocationFilter";

const ListHeader = () => {
    return (
        <div className="row page-list-header">
            <ListTypeFillter />
            <LocationFilter />
        </div>
    );
}

export default ListHeader;