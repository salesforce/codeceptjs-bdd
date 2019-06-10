const Helper = codeceptjs.helper;
const Faker = require('faker');

class FakerHelper extends Helper {
  async grabRandomString(length) {
    return Faker.random.alphaNumeric(length || 10);
  }
}

module.exports = FakerHelper;
