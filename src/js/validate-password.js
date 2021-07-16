import joi from 'joi';
console.log(joi);


const passSchema = joi.string().min(3).max(10);

export default function validatePassword(password){
	return passSchema.validate(password);
}


