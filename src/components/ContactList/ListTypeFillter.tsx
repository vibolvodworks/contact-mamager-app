import { useNavigate } from "react-router-dom";
import React from "react";

interface IProps {
  title: string;
  onClick: (type: string) => void;
}

const ListTypeFillter: React.FC<IProps> = ({ title, onClick }) => {
  const navigate = useNavigate();
  const onChangeViewHandler = (type: string) => {
    onClick(type);
  };

  const goToPage = () => {
    navigate("/people/create");
  };
  return (
    <div className="col-xl-10">
      <div className="pagetitle">
        <span>{title}</span>
        <i
          onClick={(e) => onChangeViewHandler("grid")}
          className="bi bi-grid-fill"
        ></i>
        <i
          onClick={(e) => onChangeViewHandler("list")}
          className="bi bi-list"
        ></i>
        <button onClick={goToPage} type="button" className="btn btn-primary">
          Create New People
        </button>
      </div>
    </div>
  );
};

export default ListTypeFillter;
