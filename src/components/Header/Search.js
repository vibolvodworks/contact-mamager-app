import "./Search.css";

const Search = ({onSearch}) => {
    const onSearchHandler = (event) => {
        // onSearch(event.target.value);
    }
    return (
        <div className="col-xl-3">
            <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                    <input onChange={onSearchHandler} type="text" name="query" placeholder="Search" className="form-control" title="Enter search keyword" />
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
            </div>
        </div>
    );
}

export default Search;