const GenericError = require('../helpers/GenericError');

const validate = (schema, data) => schema.validateAsync(data);

module.exports = validate;
