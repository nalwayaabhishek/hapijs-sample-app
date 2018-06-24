'use strict';

const { expect } = require('code');
const { it } = exports.lab = require('lab').script();
const userController = require('../../server/controllers/userController');

it('should return Hello World on getting user', async () => {
  expect(await userController.getUsers()).to.equal('Hello World!!');
});
