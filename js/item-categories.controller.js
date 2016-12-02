(function () {
'use strict';

angular.module('data')
.controller('ItemCategoriesController', ItemCategoriesController);

ItemCategoriesController.$inject = ['itemslist'];
function ItemCategoriesController(itemslist) {
  var itemCategories = this;
  itemCategories.items = itemslist.menu_items;
  //console.log(itemCategories.items );
}



})();
