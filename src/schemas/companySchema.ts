import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  address: Joi.string().required(),
  serviceOfActivity: Joi.string().required(),
  numberOfEmployees: Joi.number().integer().required(),
  description: Joi.string().required(),
  type: Joi.string().required(),
});

export default schema;
