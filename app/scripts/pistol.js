'use strict';

const Gun = require('gun');
const gun = new Gun();
require('gungo');

const pistol = function(name) {
  return gun.get(name);
}

module.exports = pistol;
