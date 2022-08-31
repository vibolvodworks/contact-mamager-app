import Profile from "./Profile";
import React from "react";
import { IPerson } from "../../interface";

interface IProps {
  listType: string;
  data: IPerson[];
}

const ListProfile: React.FC<IProps> = ({ listType, data }) => {
  const RenderProfile = (listType: string, data: IPerson[]) => {
    let rows: Array<React.ReactElement[]> = [],
      columns: React.ReactElement[] = [];
    let rowIndex = 0;
    data.forEach((profile, i) => {
      // prepare the array
      columns.push(
        <Profile
          listTypeClass={listType + "-group-item"}
          key={profile.key}
          data={profile}
        />
      );
      // insert new row if 4 columns
      if ((i + 1) % 4 === 0) {
        columns = [];
        rowIndex += 1;
      }
      rows[rowIndex] = columns;
    });
    return rows.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className={"row " + listType + "-group"}>
          {row.map((column) => {
            return column;
          })}
        </div>
      );
    });
  };
  return (
    <div className="row">
      <div className="col-xl-12">
        <section className="section profile">
          {RenderProfile(listType, data)}
        </section>
      </div>
    </div>
  );
};

export default ListProfile;
