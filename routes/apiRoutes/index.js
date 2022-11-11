const express = require("express");
const router = express.Router();

// include and use  inventory and departments
router.use(require("./inventory"));
router.use(require("./department"));
router.use(require("./employees"));
router.use(require("./roles"));

module.exports = router;
