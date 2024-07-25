import Joi from 'joi';

const commonMessages = {
  'string.base': '{#label} should be a string',
  'string.min': 'Too short!! {#label} should have at least {#limit} characters',
  'string.max': 'Too long!! {#label} should have at most {#limit} characters',
  'any.required': '{#label} is required',
};

const nameSchema = Joi.string()
  .min(3)
  .max(20)
  .required()
  .messages({
    ...commonMessages,
    'any.required': 'Contact name is required',
  });

const phoneNumberSchema = Joi.string()
  .min(3)
  .max(20)
  .required()
  .messages({
    ...commonMessages,
    'any.required': 'Phone number is required',
  });

const emailSchema = Joi.string().email().messages({
  'string.base': 'E-mail should be a string',
  'string.email': 'E-mail should be a valid email address',
});

const contactTypeSchema = Joi.string()
  .valid('work', 'home', 'personal')
  .required()
  .messages({
    'any.only': '{#label} should be one of [work, home, personal]',
    'any.required': 'Contact type is required',
  });

const isFavouriteSchema = Joi.boolean().messages({
  'boolean.base': '{#label} should be a boolean',
});

export const createContactSchema = Joi.object({
  name: nameSchema,
  phoneNumber: phoneNumberSchema,
  email: emailSchema,
  isFavourite: isFavouriteSchema,
  contactType: contactTypeSchema,
});

export const updateContactSchema = Joi.object({
  name: nameSchema.optional(),
  phoneNumber: phoneNumberSchema.optional(),
  email: emailSchema.optional(),
  isFavourite: isFavouriteSchema,
  contactType: contactTypeSchema.optional(),
});

// variant 1
// export const createContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).required().messages({
//     'string.base': 'Contact name should be a string',
//     'string.min':
//       'Too short!! Contact name should have at least {#limit} characters',
//     'string.max':
//       'Too long!! Contact name should have at most  {#limit} characters',
//     'any.required': 'Contact name is required',
//   }),
//   phoneNumber: Joi.string().min(3).max(20).required().messages({
//     'string.base': 'Phone number should be a string',
//     'string.min':
//       'Too short!! Phone number should have at least {#limit} characters',
//     'string.max':
//       'Too long!! Phone number should have at most  {#limit} characters',
//     'any.required': 'Phone number is required',
//   }),
//   email: Joi.string().email().messages({
//     'string.base': 'E-mail should be a string',
//   }),
//   isFavourite: Joi.boolean(),
//   contactType: Joi.string().valid('work', 'home', 'personal').required(),
// });

// export const updateContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).messages({
//     'string.base': 'Contact name should be a string',
//     'string.min':
//       'Too short!! Contact name should have at least {#limit} characters',
//     'string.max':
//       'Too long!! Contact name should have at most  {#limit} characters',
//     'any.required': 'Contact name is required',
//   }),
//   phoneNumber: Joi.string().min(3).max(20).messages({
//     'string.base': 'Phone number should be a string',
//     'string.min':
//       'Too short!! Phone number should have at least {#limit} characters',
//     'string.max':
//       'Too long!! Phone number should have at most  {#limit} characters',
//     'any.required': 'Phone number is required',
//   }),
//   email: Joi.string().email().messages({
//     'string.base': 'E-mail should be a string',
//   }),
//   isFavourite: Joi.boolean(),
//   contactType: Joi.string().valid('work', 'home', 'personal'),
// });
