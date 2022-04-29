const { staffData } = require('../requestsdata/staffs-table')

const staffSeed = async (tenant) =>  await tenant('staff_info').insert(staffData)

module.exports = staffSeed