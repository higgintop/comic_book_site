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
      when('/about-artist', {
        templateUrl: '../views/partials/about-artist.html',
        controller: 'LandingPageController',
        css: '../css/partials/about-artist.css'
      }).
      when('/todays-comic', {
        templateUrl: '../views/partials/todays-comic.html',
        controller: 'LandingPageController',
        css: '../css/partials/todays-comic.css'
      }).
      when('/art-for-sale', {
        templateUrl: '../views/partials/art-for-sale.html',
        controller: 'LandingPageController',
        css: '../css/partials/art-for-sale.css'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);