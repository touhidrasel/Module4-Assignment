(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categorieslist.template.html',
    controller: 'MainCategoriesController as mainCategories',
    resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
  })

  .state('items', {
    url: '/item/{itemShortName}',
    templateUrl: 'src/item.template.html',
    controller: 'ItemCategoriesController as itemCategories',
    resolve: {
        itemslist: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.itemShortName);
        }]
      }
  });
}
})();
