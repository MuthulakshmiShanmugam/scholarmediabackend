const staffData= async (req,res)=>{
    const {
              body: { staff_name }
            } = req
            const staffName = slugify(staff_name.toLowerCase(), '_') //shows full name in lowecase without _
            console.log("staff_name"+staffName);
               const staff = {
              
                 staff_name: staffName
                
               }

               return staff;

}

exports.module= staffData;