const express = require("express");
const router = express.Router();
const { index, index1, index3, updateStaff } = require("../controllers/staff");
const { connectionRequest } = require("../middlewares/connection");
const { staffsSeed } = require("../seeders/staffs-seed");

router.route("/staffs").get(connectionRequest, index);
router.route("/staffs").post(connectionRequest, index1);
router.route("/staffs").get(connectionRequest, index3);
router.route("/staffs").put(connectionRequest, updateStaff);

module.exports = router;
