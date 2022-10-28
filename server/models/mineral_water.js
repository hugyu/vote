const express = require("express");
const router = express.Router();
const sqlQuery = require("../mysql");

// const imgLists = ["https://serverless-project-static-files-hgy.oss-cn-hangzhou.aliyuncs.com/exsercise/mineral%20water/binglu.png", "https://serverless-project-static-files-hgy.oss-cn-hangzhou.aliyuncs.com/exsercise/mineral%20water/chunyue.png"]
// const nameList=['冰露','纯悦']
// const createTable = async () => {
//   try {
//     //创建表
//     const createTableSql = `
//     create table if not exists mineral_water (
//         id int auto_increment,
//         label varchar(255) not null,
//         imgUrl char(255) not null,
//         ticket_count int not null default 0,
//         primary key (id) 
//     ) engine=innodb;
//     `;
//     await sqlQuery(createTableSql);
//     //向表中插入图片
//     for (let i = 0; i < imgLists.length; i++) {
//       const insetSql = `insert into mineral_water(id,label,imgUrl) values(null,'${nameList[i]}','${imgLists[i]}')`;
//       await sqlQuery(insetSql);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
// createTable();
router.get("/mineral", async (req, res) => {
    const strsql = "select * from mineral_water";
    try {
      const result = await sqlQuery(strsql);
      res.send({
        code: 1,
        message: "请求成功",
        result
      });
    } catch (error) {
      res.send({
        code: -1,
        message: "失败"
      });
    }
  });
  
  module.exports = router;