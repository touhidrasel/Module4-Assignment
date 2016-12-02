(function () {
'use strict';

angular.module('data')
.controller('MainCategoriesController', MainCategoriesController);

MainCategoriesController.$inject = ['categories'];
function MainCategoriesController(categories) {
  var mainCategories = this;
  mainCategories.categoriesList = categories;
  //console.log(mainCategories.categoriesList);
}

})();
