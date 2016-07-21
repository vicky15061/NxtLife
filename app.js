'use strict';

// Declare app level module which depends on views, and components
angular.module('nxtLifeTask', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl'
  }).when('/contacts', {
      templateUrl: 'contacts/contacts.html',
      controller: 'contactsCtrl'
  }).when('/about', {
      templateUrl: 'aboutus/aboutus.html'
  }).otherwise({redirectTo: '/'});
}]).controller('mainCtrl', function() {

    });
