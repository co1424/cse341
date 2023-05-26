const { body, validationResult } = require('express-validator')
const contactValidationRules = () => {
  return [
    // firstName must be an string
    body('firstName').isString(),
    // lastName must be an string
    body('lastName').isString(),
    // email must be an email:
    body('email').isEmail(),
    // birthday is a date:
    body('birthday').isDate(),
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

  return res.status(412).json({
    errors: extractedErrors,
  })
}

module.exports = {
  contactValidationRules,
  validate,
}