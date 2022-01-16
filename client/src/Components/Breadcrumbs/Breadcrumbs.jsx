import React from "react";
import "./breadcrumbs.css";
import { Link } from "react-router-dom";
const Breadcrumbs = (props) => {
  return (
    <>
      <div className="breadcrumb-bg_img">
        <h1 className="breadcrumb-title">{props.pageName}</h1>
        <h5 className="breadcrumb-links">
          <Link to="/">Home</Link>/{" "}
          <span>
            <Link to={props.pageLink}>{props.pageName}</Link>
          </span>{" "}
        </h5>
      </div>
    </>
  );
};
export default Breadcrumbs;
