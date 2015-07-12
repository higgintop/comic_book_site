app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../views/partials/landing-page.html',
        controller: 'LandingPageController',
        css: '../css/partials/landing-page.css'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);