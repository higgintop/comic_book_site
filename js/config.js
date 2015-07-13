app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../views/partials/landing-page.html',
        controller: 'LandingPageController',
        css: '../css/partials/landing-page.css'
      }).
      when('/archive', {
        templateUrl: '../views/partials/archive.html',
        controller: 'LandingPageController',
        css: '../css/partials/archive.css'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);