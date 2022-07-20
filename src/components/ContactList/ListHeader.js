import "./ListHeader.css";
import ListTypeFillter from "./ListTypeFillter";
import LocationFilter from "./LocationFilter";

const ListHeader = ({title, onChangeView}) => {
    const onClickChangeViewHandler = (type) => {
        onChangeView(type);
    }
    return (
        <div className="row page-list-header">
            <ListTypeFillter onClick={onClickChangeViewHandler} title={title} />
            <LocationFilter />
        </div>
    );
}

export default ListHeader;