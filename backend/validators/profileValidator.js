import Joi from "joi";

export const profileSchema = Joi.object({
  name: Joi.string().required(),
  headline: Joi.string().required(),
  location: Joi.string().required(),
  image: Joi.string().uri().required(),
  bio: Joi.string().required(),
  links: Joi.array().items(Joi.string().uri()),
  role: Joi.string().required(),
  interests: Joi.array().items(Joi.string()),
  skills: Joi.array().items(Joi.string()),
  education: Joi.array().items(Joi.string()),
  experience: Joi.array().items(Joi.string()),
  projects: Joi.array().items(Joi.string()),
  isVerified: Joi.boolean().required(),
  collaborating: Joi.boolean().required(),
  criteria: Joi.array().items(Joi.string()),
});
