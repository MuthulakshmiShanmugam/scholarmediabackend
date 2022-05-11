const staffsTable = require('./staffs-table')
const empTable= require('./emp-table')


const migrate = async (tenant) => {
  console.log("migration index");
  try{
  await staffsTable(tenant);
  await empTable (tenant);
  }catch(e){
    console.log("migration index error"+e);
  }
  //await usersTable(tenant);
}

module.exports = migrate