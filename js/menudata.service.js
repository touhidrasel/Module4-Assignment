(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'BaseApiPath'];
function MenuDataService ($http, BaseApiPath) {
  var service = this;
  this.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (BaseApiPath + "/categories.json"),
      })
      .then(function (result) {
        return result.data;
      });
  };

  this.getItemsForCategory =  function (categoryName) {
      return $http({
        method: "GET",
        url: (BaseApiPath + "/menu_items.json?category=" + categoryName),
      })
      .then(function (result) {
        return result.data;
      });
  }
}

})();
