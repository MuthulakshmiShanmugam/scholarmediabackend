const { db } = require("../config/database");
const { getConnection } = require("../services/connection-service");
const { getAll } = require("../repositories/staff");
const { default: slugify } = require("slugify");
const { seed } = require("../seeders/index");

// const { staffSeed } = require("../seeders/staffs-seed");

const index = async (req, res) => {
  const staffs = await getAll();
  console.log("staffs controller" + req.body);
  console.log("staff controller" + staffs);
  return res.formatter.ok({ staffs });
};

const index1 = async (req, res) => {
  console.log(req.query);
  const {
    body: { staff_name },
  } = req;
  const staffName = slugify(staff_name.toLowerCase(), "_"); //shows full name in lowecase without _
  console.log("staff_name" + staffName);
  const staff = {
    staff_name: staffName,
    created_at: new Date(),
    updated_at: new Date(),
  };
  const conn = await getConnection();
  if (!conn) {
    return null;
  }
  await conn.insert(staff).from("staff_info");
  //await tenant("staff_info").insert(staff);
  return res.formatter.ok({ staff });
  //await tenant("staff_info").insert(staffData);
  // await seed(req.params.tenantId);
  // console.log("staff controller" + staff);
  // return res.formatter.ok({ staff });
};

module.exports = { index, index1 };
