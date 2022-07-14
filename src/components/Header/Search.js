import "./Search.css";

const Search = () => {
    return (
        <div className="col-xl-3">
            <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" className="form-control" title="Enter search keyword" />
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
            </div>
        </div>
    );
}

export default Search;