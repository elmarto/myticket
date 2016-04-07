(function() {
  'use strict';

  angular
    .module('myticket')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider

      .state('event', {
        abstract: true,
        url: '/event/:id',
        templateUrl: 'app/event/event.html',
        controller: 'EventController',
        controllerAs: 'event'
      })

      .state('event.home', {
        url: '/',
        templateUrl: 'app/event/home/home.html',
        controller: 'EventHomeController',
        controllerAs: 'eventHome'
      })

      .state('event.detail', {
        url: '/detail',
        templateUrl: 'app/event/detail/detail.html',
        controller: 'EventDetailController',
        controllerAs: 'eventDetail'
      });
  }

})();
