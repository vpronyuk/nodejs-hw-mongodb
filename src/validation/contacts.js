import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(), //add custom message later
  phoneNumber: Joi.string().min(5).max(13).required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});
