import React from "react";
import { Topheader } from "./TopHeader/Topheader";
import "./header.css";
import { GoPerson } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userAction";
import HeaderCart from "./HeaderCart/HeaderCart";
import MobileHeader from "./MobileHeader/MobileHeader";

const Header = ({ user, loading }) => {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const options = [
    { name: "Orders", func: orders },
    { name: "Profile", func: account },
    { name: "Logout", func: logoutUser },
  ];
  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function dashboard() {
    history.push("/admin/dashboard");
  }

  if (loading === false) {
    if (user != null) {
      if (user.role === "admin") {
        options.unshift({
          name: "Dashboard",
          func: dashboard,
        });
      }
    }
  }

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  return (
    <>
    Hello world
      <div className="main__header">
        <Topheader />
        <section className="header mt-3">
          <div className="container">
            <div className="row">
              <div className="col-2 mt-2">
                <Link to="/" className="logo-link">
                <h3 >Shop<span style={{color:"var(--bs-danger)"}}>Corner</span>
                  </h3>
                </Link>
                
              </div>
              <div className="col-7 mt-2">
                <SearchBar />
              </div>
              <div className="col-1">
                <div className="dropdown">
                  <button
                    className="header-drop-down"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AiFillHeart />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li
                      className="dropdown-item"
                    >
                      <Link to="/wishlists">Wishlist</Link>
                    </li>
                    <li
                      className="dropdown-item"
                    >
                      <Link to="/compare-products">Compare Product</Link>
                    </li>
                    
                  </ul>
                </div>
              </div>

              <div className="col-1">
                <div className="dropdown">
                  <button
                    className="header-drop-down"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <GoPerson />
                  </button>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {user !== null ? (
                      <>
                        {options.map((item, index) => {
                          return (
                            <li
                              className="dropdown-item"
                              onClick={item.func}
                              key={index}
                            >
                              {item.name}
                            </li>
                          );
                        })}
                      </>
                    ) : user === null ? (
                      <>
                        <li className="dropdown-item">
                          <Link to="/login"> Login </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="/signup"> Signup </Link>
                        </li>
                      </>
                    ) : null}
                  </ul>
                </div>
              </div>

              <HeaderCart />
            </div>
          </div>
        </section>
        <Navbar />
      </div>
      <div className="resposive_header">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
