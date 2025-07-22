const express = require('express');
const router = express.Router();
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
  getCoupon,
} = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", getAllCoupons);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);
router.get("/:id", getCoupon);

module.exports = router ;