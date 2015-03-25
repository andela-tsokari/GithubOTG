(function () {
  angular.module("GithubOTG")
    .controller('LoginCtrl', function($auth) {
      this.authenticate = function(provider) {
        $auth.authenticate(provider);
      };
    });   
})();