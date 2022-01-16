import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productReducer,
  productDetailsReducer,
  newReviewReducer,
  reviewReducer,
  productReviewsReducer,
  newProductReducer,
  
} from "./reducers/productReducer";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";
import { compareProductlistReducer } from "./reducers/compareProductReducer";

const reducer = combineReducers({
  products: productsReducer,
  product:productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  productReviews: productReviewsReducer,
  reviewReducer: reviewReducer,
  wishlist: wishlistReducer,
  compareProductlist: compareProductlistReducer,
  newProduct: newProductReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  review: reviewReducer,
});
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  wishlist: {
    wishlistItems: localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : [],
  },
  compareProductlist: {
    compareProductListItems: localStorage.getItem("compareProductListItems")
      ? JSON.parse(localStorage.getItem("compareProductListItems"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
