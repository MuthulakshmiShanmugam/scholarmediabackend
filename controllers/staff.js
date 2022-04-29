const { db } = require('../config/database')
const { getAll } = require('../repositories/staff')
const { default: slugify } = require("slugify");
const { seed } = require('../seeders/index');

//const {staffSeed} =require('../seeders/staffs-seed')

const index = async (req, res) => {
  const staffs = await getAll()
  console.log("staff controller"+staffs);
  return res.formatter.ok({ staffs })
}

const index1=async(req,res)=>{
    // const {
    //       body: { staff_name }
    //     } = req
    //     const staffName = slugify(staff_name.toLowerCase(), '_') //shows full name in lowecase without _
    //     console.log("staff_name"+staffName);
    //        const staff = {
          
    //          staff_name: staffName
            
    //        }
           
    //       await conn.tenant('staffs_info').insert(staff);
          
   
    

    // return res.formatter.ok({staffs})

    const staff = await seed()
    console.log("staff controller"+staff);
    return res.formatter.ok({ staff})

}

module.exports = { index,index1 }