import Profile from "./Profile"



const ListProfile = ({ data = [] }) => {

    const RenderProfile = (data) => {
        let rows = [], columns = [];
        let rowIndex = 0;
        data.forEach((profile, i) => {
            // prepare the array
            profile['key'] = i;
            columns.push(
                // <Profile key={profile.key} data={profile} />
                <Profile key={i} data={profile} />
            );
            // insert new row if 4 columns
            if ((i + 1) % 4 === 0) {
                columns = [];
                rowIndex += 1;
            }
            rows[rowIndex] = columns;
        });
        return rows.map((row, rowIndex) => {
            return <div key={rowIndex} className="row">
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
                    {RenderProfile(data)}
                </section>
            </div>
        </div>
    );
}

export default ListProfile;