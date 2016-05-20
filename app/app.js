var angular = require('angular');
/* Need to find the better solution to use Angular and jQuery together */
window.$ = angular.element;
angular.element = require('jquery');
require('./js/modules.js');
require('./js/config.js');