const { db } = require("../config/database");
const { getAll } = require("../repositories/staff");
const { default: slugify } = require("slugify");
const { getConnection } = require("../services/connection-service");
const knex = require("knex");

const { seed } = require("../seeders/index");
const { up } = require("../services/timestamp-service");

//const {staffSeed} =require('../seeders/staffs-seed')

const index = async (req, res) => {
  const staffs = await getAll();
  console.log("staff controller" + staffs);
  return res.formatter.ok({ staffs });
};

const index3 = async (req, res) => {
  const conn = await getConnection();

  if (!conn) {
    return null;
  }
  console.log("repository staff selection");
  const {
    body: { id },
  } = req;
  console.log("my id" + id);
  const result = await conn.select("*").from("staff_info").where(id);

  return res.send(result);
};

const index1 = async (req, res) => {
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

  return res.formatter.ok({ staff });

  // const staff = await seed()
  // console.log("staff controller"+staff);
  // return res.formatter.ok({ staff})
};

const updateStaff = async (req, res) => {
  const {
    body: { id },
  } = req;

  const {
    body: { staff_name },
  } = req;

  console.log("id to update" + id);

  const conn = await getConnection();
  if (!conn) {
    return null;
  }
  var updated_at = new Date();
  console.log("my updated_at" + updated_at);

  await conn
    .update("staff_name", staff_name, "updated_at", updated_at)

    .from("staff_info")
    .where("id", id);

  // await conn.knex.raw("update staff_info set staff_name=? where id=?", [
  //   staff_name,
  //   id,
  // ]);

  return res.formatter.ok({ message: "staff was updated successfully" });
};

module.exports = { index, index1, index3, updateStaff };
