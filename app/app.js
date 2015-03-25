( function () {
  "use strict";

  angular.module("GithubOTG", ["ngMaterial", "ngRoute", "satellizer"])
    .config(function($authProvider) {
      $authProvider.github({
        clientId: "bb19076da6648f2fa39c",
        scope: ["user", "public_repo"]
      });
    });
})();