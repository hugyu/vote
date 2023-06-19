const express = require("express");
const router = express.Router();
const sqlQuery = require("../mysql");

router.get("/choice", async (req, res) => {
  const strsql = "select * from choice";
  try {
    const result = await sqlQuery(strsql);
    res.send({
      code: 1,
      message: "请求成功",
      result,
    });
  } catch (error) {
    res.send({
      code: -1,
      message: "失败",
    });
  }
});

module.exports = router;
