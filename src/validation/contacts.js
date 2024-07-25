import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Contact name should be a string',
    'string.min':
      'Too short!! Contact name should have at least {#limit} characters',
    'string.max':
      'Too long!! Contact name should have at most  {#limit} characters',
    'any.required': 'Contact name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min':
      'Too short!! Phone number should have at least {#limit} characters',
    'string.max':
      'Too long!! Phone number should have at most  {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().messages({
    'string.base': 'E-mail should be a string',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Contact name should be a string',
    'string.min':
      'Too short!! Contact name should have at least {#limit} characters',
    'string.max':
      'Too long!! Contact name should have at most  {#limit} characters',
    'any.required': 'Contact name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a string',
    'string.min':
      'Too short!! Phone number should have at least {#limit} characters',
    'string.max':
      'Too long!! Phone number should have at most  {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().messages({
    'string.base': 'E-mail should be a string',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
