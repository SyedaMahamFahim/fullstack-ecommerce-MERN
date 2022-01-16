import React from 'react'
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import './notfoundpage.css'
import { Link } from 'react-router-dom';
import MetaData from '../../MetaData/MetaData';
const NotFoundPage = () => {
    return (
        <>
        <MetaData title="404" />
            <Breadcrumbs pageName={"404"} />
            <div className="jumbotron d-flex align-items-center mt-5">
        <div className="container text-center mt-5">
         <h1 className="not-found-page-h1">
         404
         </h1>
         <h2 className="not-found-page-h2">
             Page Not Found
         </h2>
         <button type="button" className="btn btn-dark btn-lg mt-3">
                  <Link to="/">Home</Link>
                </button>
        </div>
      </div>
        </>
    )
}

export default NotFoundPage
