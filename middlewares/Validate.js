const Joi = require('joi');

// Joi validation schema
const taskValidationSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'string.empty': 'Task title is required',
  }),
  category: Joi.string().trim().optional(),
  priority: Joi.string().valid('high', 'medium', 'low').default('medium'),
  status: Joi.string().valid('completed', 'incomplete').default('incomplete'),
  dueDate: Joi.date().optional(),
});

const validateTask = (req, res, next) => {
  const { error } = taskValidationSchema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (error) {
    return res.status(400).json({ errors: error.details.map(err => err.message) });
  }

  next();
};

module.exports = { validateTask };
