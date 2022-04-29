const staffSeed = require('./staffs-seed')
//const usersSeed = require('./users-seed')

const seed = async (tenant) => {
  console.log("seeders index");
  await staffSeed(tenant)
  //await usersSeed(tenant)
}

module.exports = seed