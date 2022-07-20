const ListTypeFillter = ({title, onClick}) => {
    const onChangeViewHandler = (event, type) => {
        onClick(type);
    }
    return (
        <div className="col-xl-10">
            <div className="pagetitle">
                <span>{title}</span>
                <i onClick={(e) => onChangeViewHandler(e, 'grid')} className="bi bi-grid-fill"></i>
                <i onClick={(e) => onChangeViewHandler(e, 'list')} className="bi bi-list"></i>
            </div>
        </div>
    );
}

export default ListTypeFillter;