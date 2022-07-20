import Profile from "./Profile"

const ListProfile = ({ listType, data = [] }) => {
    const RenderProfile = (listType, data) => {
        let rows = [], columns = [];
        let rowIndex = 0;
        data.forEach((profile, i) => {
            // prepare the array
            profile['key'] = i;
            columns.push(
                <Profile listTypeClass={listType + '-group-item'} key={i} data={profile} />
            );
            // insert new row if 4 columns
            if ((i + 1) % 4 === 0) {
                columns = [];
                rowIndex += 1;
            }
            rows[rowIndex] = columns;
        });
        return rows.map((row, rowIndex) => {
            return <div key={rowIndex} className={"row " + listType + '-group'}>
                {row.map((column) => {
                    return column;
                })}
            </div>;
        })
    }
    return (
        <div className="row">
            <div className="col-xl-12">
                <section className="section profile">
                    {RenderProfile(listType, data)}
                </section>
            </div>
        </div>
    );
}

export default ListProfile;