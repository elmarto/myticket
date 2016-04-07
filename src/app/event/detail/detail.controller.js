(function() {
  'use strict';

  angular
    .module('myticket')
    .controller('EventDetailController', EventDetailController);

  /** @ngInject */
  function EventDetailController() {
    var vm = this;
    vm.awesomeThings = [];
  }
})();
