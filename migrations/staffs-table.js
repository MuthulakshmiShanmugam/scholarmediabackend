
const { Knex, default: knex } = require("knex");
const { db } = require('../config/database');

const staffsTable = async (tenant) => {
  
  try{
    console.log("tenants in staffs in table");
    await tenant.schema.createTable('staff_info', (table) => {
      
      table.increments();
      table.string('staff_name');
      table.timestamps();
      
    })
  }
  catch(err){
    console.log("staffs table caught error"+err);
  }
  }
  
  module.exports = staffsTable