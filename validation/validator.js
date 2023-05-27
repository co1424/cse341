const { body, validationResult } = require('express-validator')
const contactValidationRules = () => {
  return [
    // firstName must be an string
    body('firstName').isString().withMessage('firstName name must be a string'),
    // lastName must be an string
    body('lastName').isString().withMessage('lastName must be a string'),
    // email must be an email:
    body('email').isEmail().withMessage('Invalid email address'),
    // color must be a string,
    body('color').isString().withMessage('color must be a string'),

  ]
}


// Middleware Function:
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  contactValidationRules,
  validate,
}