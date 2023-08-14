const express = require('express');
const { userValidation } = require('../../validations');
const { userController} = require('../../controller');
const validate  = require('../../middlewares/validate');

const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);
// Get user
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);
module.exports = router;