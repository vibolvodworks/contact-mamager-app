import React from "react";

const HeaderNav: React.FC = () => {
  return (
    <div className="col-xl-9">
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="assets/img/profile-img.jpg"
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block ps-2">K. Anderson</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
