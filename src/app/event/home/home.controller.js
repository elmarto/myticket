(function() {
  'use strict';

  angular
    .module('myticket')
    .controller('EventHomeController', EventHomeController);

  /** @ngInject */
  function EventHomeController() {
    var vm = this;
    vm.awesomeThings = [];
  }
})();
