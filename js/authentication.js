fastfood.service('authenticationService', function ($scope, $rootScope, $http, $cookieStore, $timeout) {

    this.logIn = function (username, password, response) {

        $setTimeout(function() {

        }, 1000);
    }

    this.setCredencials = function () {

        $rootScope.globals = {
            currentUser: {
                username: "username",
                authen: "authen"
            }
        };
        $cookieStore.put('globals', $rootScope.globals);
    }

    this.clearCredencials = function () {

        $rootScope.globals = {};
        $cookieStore.remove('globals');
    }
})