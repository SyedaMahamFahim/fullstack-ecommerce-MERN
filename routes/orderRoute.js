const express = require("express");
const {
  newOrder,
  getSingleOrder ,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder
} = require("../controllers/orderController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// For User
router.route("/order/new-order").post(isAuthenticatedUser, newOrder);
router.route("/order/profile/my-orders").get(isAuthenticatedUser,myOrders);


// For Admin
router.route("/order/get-single-order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/admin/get-all-orders").get(isAuthenticatedUser, getAllOrders);
router.route("/admin/update-order/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateOrder);
router.route("/admin/delete-order/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteOrder);
module.exports = router;
