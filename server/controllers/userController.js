'use strict';

const boom = require('boom');
const httpStatus = require('http-status');

const getUsers = async function getUsers() {
  try {
    const data = 'Hello World!!';
    return data;
  } catch (error) {
    return boom.boomify(error,
      { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: error });
  }
};

module.exports = {
  getUsers,
};
