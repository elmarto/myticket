(function() {
  'use strict';

  angular
    .module('myticket')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('event', {
        url: '/event/:id',
        templateUrl: 'app/event/event.html',
        controller: 'EventController',
        controllerAs: 'event'
      });
  }

})();
