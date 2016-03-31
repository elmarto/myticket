(function() {
  'use strict';

  angular
    .module('myticket')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
