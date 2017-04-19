'use strict';

const Gun = require('gun');
const gun = new Gun();

const pistol = function(name) {
  return gun.get(name);
}

module.exports = pistol;
