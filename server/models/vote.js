const express = require("express");
const router = express.Router();
const sqlQuery = require("../mysql");
router.get("/vote", async (req, res) => {
    const { ticket_count, label, choice } = req.query;
    console.log(ticket_count,label,choice);
    const strsql = `update ${choice} set ticket_count = ${Number(ticket_count) +
      1} where label = '${label}'`;
    
    try {
      await sqlQuery(strsql);
      const strsql2 = `select * from ${choice}`;
      const result = await sqlQuery(strsql2);
      console.log(result);
      res.send({
        code: 1, 
        message: "请求成功",
        result
      });
    } catch (error) {
      console.log(error);
      res.send({
        code: -1,
        message: "失败"
      });
    }
});
module.exports = router;
  