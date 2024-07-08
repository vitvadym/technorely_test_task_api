import Joi from 'joi';

const schema = Joi.object({
  id: Joi.number().integer(),
  userId: Joi.number().allow(null),
  name: Joi.string().min(6).required(),
  address: Joi.string().required(),
  serviceOfActivity: Joi.string().required(),
  numberOfEmployees: Joi.number().integer().required(),
  description: Joi.string().required(),
  type: Joi.string().required(),
  createdAt: Joi.string(),
  updatedAt: Joi.string(),
});

export default schema;
