
const Employee = require("../models/employee");
const bcrypt = require("bcryptjs");
const HttpError = require("../error/http-error");

 const seed= async ()=>{
    let user = await Employee.findOne({ email:'admin@gmail.com' });
    if (!user) {
     let employee = {};
     let pass = '12345';
 bcrypt.hash(pass, 10, async function (err, hash) {
   pass = hash;
   employee = new Employee({
       name: 'Admin',
       email: 'admin@gmail.com',
       password: pass,
       designation: 'HR'
   });
   try {
     await employee.save();
   }
    catch (e) {
     throw new HttpError(e);
   }
 });
}
 }

exports.seed = seed;