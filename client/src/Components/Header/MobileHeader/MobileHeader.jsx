import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsHeart, BsCartPlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./mobileHeader.css";
import SearchBar from "../SearchBar/SearchBar";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MenuData } from "../../../StaticData/Menu";
const MobileHeader = ({ user }) => {
  return (
    <>
      <div className="mobile-top-header">
        <div className="container">
          <div className="row">
            <p>
              <BiPhoneCall /> +92-1234-45056 || <AiOutlineMail />{" "}
              contact@OSS.com
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-header mt-3 mb-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/" className="logo-link">
                <h3>
                  Shop<span style={{ color: "var(--bs-danger)" }}>Corner</span>
                </h3>
              </Link>
            </div>

            <div className="col" style={{ textAlign: "end" }}>
              <button
                className="btn btn-dark"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMobileRight"
                aria-controls="offcanvasMobileRight"
              >
                <FaBars />
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasMobileRight"
                aria-labelledby="offcanvasMobileRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="offcanvasMobileRightLabel">
                    <SearchBar />
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <Link to="wishlists">
                          <BsHeart />
                        </Link>
                      </div>
                      <div className="col">
                        <Link to="/compare-products">
                          <GoGitCompare />
                        </Link>
                      </div>
                      <div className="col">
                        <Link to="/cart">
                          <BsCartPlus />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <ul className="list-group list-group-flush mt-4 text-center">
                        {MenuData.map((menuItem, index) => {
                          return <MenuItem menuItem={menuItem} key={index} />;
                        })}
                        {!user && (
                          <>
                            <li className="list-group-item">
                              <Link to="/login"> Login </Link>
                            </li>
                            <li className="list-group-item">
                              <Link to="/signup"> Signup </Link>
                            </li>
                          </>
                        )}
                      </ul>
                      <div className="mobile-header-contact">
                        <Link to="/shop">contact@OSS.com</Link>
                        <h3>(+00) 123 567990</h3>
                        <div className="mobile-header-social-icons">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ menuItem }) => {
  return (
    <>
      <li className="list-group-item">
        <Link to={menuItem.url}>{menuItem.title}</Link>
      </li>
    </>
  );
};
export default MobileHeader;
