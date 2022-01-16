import React, { useState, useEffect } from "react";
import "./shop.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductCard from "./ProductCard";
import MetaData from "../MetaData/MetaData";
import { getProducts, clearErrors } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";


const Shop = ({ match}) => {
  const categories =[
    "Men",
    "Women",
    "Men Watch",
    "Women Watch",
    "Men Shoes",
    "Women Shoes",
    "Men Perfume",
    "Women Perfume",
  ]
      
  const alert = useAlert();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price,] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);


  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
    
  } = useSelector((state) => state.products);
  // const categories = products.map(({ category }) => category)
  // const removeDuplicateCategories= [...new Set(categories)];

  const keyword = match.params.keyword;
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  // const priceHandler = (newPrice) => {
  //   setPrice(newPrice);
  // };
  let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts(keyword, currentPage, price,category ,ratings));
  }, [dispatch, keyword, currentPage, price,category, ratings ,error, alert]);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <MetaData title="Shop" />
          <Breadcrumbs pageName={"Shop"} pageLink={"/shop"} />
        

          <div className="container shop-page">
            <div className="row shop-page-row">
              <div className="col-4 shop_sidebar">
                {/* <h2 className="mt-4 mb-5 sidebar-title-h1">Price Range</h2> */}
              <fieldset>
              {/* <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              min={500}
              max={25000}
            /> */}
          
            </fieldset>
            <h2 className="mt-4 mb-3 sidebar-title-h1">Categories</h2>
            <ul className="categoryBox">
            
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  
                  {category}
                  
                  
                </li>
              ))}
            </ul>
            <h2 className="mt-4 mb-3 sidebar-title-h1">Ratings Above</h2>
            <fieldset>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
              </div>
              <div className="col-8 shop-page-container">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} loading={loading} 
                    error={error}/>
                  ))}
              </div>
            </div>
          </div>
          <div className="container" style={{ padding: "0px 05px 10px 10px"}}>
            <div className="row">
              <div className="col align-self-end">
                {resultPerPage < count && (
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Shop;
