import React from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MenuData } from "../../../StaticData/Menu";
const Navbar = () => {
  return (
    <>
      <section className="navbar mt-3">
        <div className="container">
          <div className="row">
            <div className="col-2 fabar">
              <button
                className="navbar-offcanvas"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <FaBars />
              </button>

              <div
                className="offcanvas offcanvas-start about-sidebar-header"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header ">
                  <div className="container">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      About
                    </h5>
                  </div>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="container">
                    <p className="lead">
                      At ShopCorner, we put a strong emphasis on simplicity,
                      quality and usefulness of fashion products over other
                      factors. Our fashion items never get outdated. They are
                      not short-lived as normal fashion clothes. Some text as
                      placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                    </p>
                    <div className="sidebar-about-contact">
                      <Link to="/shop">contact@shopcorner.com</Link>
                      <h3>(+00) 123 567990</h3>
                      <div className="sidebar-about-social-icons">
                        <Link to="/face">
                          <BsFacebook />
                        </Link>
                        <Link to="/face">
                          <FaInstagram />
                        </Link>
                        <Link to="/face">
                          <AiOutlineTwitter />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="col-8">
              <nav className="navbar navbar-expand-lg navbar-light" style={{background:"transparent"}}>
                <div className="container">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {
                        MenuData.map((menuItem,index)=>{
                          return(
                            <MenuItem menuItem={menuItem} key={index}/>
                          )
                        })
                      }
                     
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const MenuItem = ({menuItem}) => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={menuItem.url}>
          {menuItem.title}
        </Link>
      </li>
    </>
  );
};
export default Navbar;
