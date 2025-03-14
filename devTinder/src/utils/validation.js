const validator = require('validator');

const validateSignupData = (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName) {
        throw new Error("name should be present!");
    } else if (firstName < 4 && firstName > 50) {
        throw new Error("name should be between 4 to 50");
    } else if (!validator.isEmail(emailId)) {
        throw new Error("not valid email");
    } 
}

module.exports = { validateSignupData }