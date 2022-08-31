import "./ListHeader.css";
import ListTypeFillter from "./ListTypeFillter";
import LocationFilter from "./LocationFilter";
import React from "react";

interface IProps {
  title: string;
  onChangeView: (viewType: string) => void;
}

const ListHeader: React.FC<IProps> = ({ title, onChangeView }) => {
  const onClickChangeViewHandler = (viewType: string) => {
    onChangeView(viewType);
  };
  return (
    <div className="row page-list-header">
      <ListTypeFillter onClick={onClickChangeViewHandler} title={title} />
      <LocationFilter />
    </div>
  );
};

export default ListHeader;
