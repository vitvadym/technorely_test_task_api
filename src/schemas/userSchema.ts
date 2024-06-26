import Joi from 'joi';

const userRegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  position: Joi.string().optional(),
  description: Joi.string().optional(),
  phoneNumber: Joi.string().max(10).required(),
  nickName: Joi.string().min(3).required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export { userRegisterSchema, userLoginSchema };
