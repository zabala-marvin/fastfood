fastfood.service('authenticationService', function ($rootScope, $http, $timeout) {

    this.logIn = function (username, password, callback) {

        if (username == "username" && password == "pass" )
            response = true;
        callback(response);
    }

    this.setCredencials = function () {

        $rootScope.globals = {
            currentUser: {
                username: "username",
                authen: "authen"
            }
        };
        //$cookies.put('globals', $rootScope.globals);
    }

    this.clearCredencials = function () {

        $rootScope.globals = {};
        //$cookies.remove('globals');
    }
})