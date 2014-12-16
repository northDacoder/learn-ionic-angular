angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LanguagesCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Python', id: 1 },
    { title: 'Django', id: 2 },
    { title: 'JavaScript', id: 3 },
    { title: 'jQuery', id: 4 },
    { title: 'Bootstrap', id: 5 },
    { title: 'Groovy', id: 6 },
    { title: 'Grails', id: 7 },
    { title: 'TypeScript', id: 8 },
    { title: '.Net', id: 9 },
    { title: 'Java', id: 10 },
  ];
})

.controller('LanguageCtrl', function($scope, $stateParams) {
});
