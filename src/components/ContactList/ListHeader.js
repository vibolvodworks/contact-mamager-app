import "./ListHeader.css";
import ListTypeFillter from "./ListTypeFillter";
import LocationFilter from "./LocationFilter";

const ListHeader = ({title}) => {
    return (
        <div className="row page-list-header">
            <ListTypeFillter title={title} />
            <LocationFilter />
        </div>
    );
}

export default ListHeader;