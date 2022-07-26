import { useNavigate } from "react-router-dom";

const ListTypeFillter = ({ title, onClick }) => {
    const navigate = useNavigate();
    const onChangeViewHandler = (event, type) => {
        onClick(type);
    }

    const goToPage = () => {
        navigate("/people/create");
    }
    return (
        <div className="col-xl-10">
            <div className="pagetitle">
                <span>{title}</span>
                <i onClick={(e) => onChangeViewHandler(e, 'grid')} className="bi bi-grid-fill"></i>
                <i onClick={(e) => onChangeViewHandler(e, 'list')} className="bi bi-list"></i>
                <button onClick={goToPage} type="button" className="btn btn-primary">Create New People</button>
            </div>
        </div>
    );
}

export default ListTypeFillter;