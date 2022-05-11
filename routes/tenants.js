const express = require("express");
const router = express.Router();
const { index, store, destroy, index2 } = require("../controllers/tenant");
const { storeRequest } = require("../middlewares/tenant");

router.route("/tenants").get(index).post(storeRequest, store);
router.route("/tenants/:uuid").delete(destroy);

router.route("/tenants/view").get(index2);

module.exports = router;
