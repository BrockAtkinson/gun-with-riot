'use strict';

init();

function init() {
  const riot = require('riot');
  require('tags/todo');
  riot.settings.autoUpdate = false;
  riot.mount('app');
}
