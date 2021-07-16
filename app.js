const joi = require('joi');
const shortid = require('shortid');
 

const passwordSchema = joi.string().min(3).max(10).alphanum()

console.log(passwordSchema.validate('qasd123'));
console.log(shortid.generate());
console.log(shortid.generate('#'));

