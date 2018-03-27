angular.module('myApp', ['ngMaterial', 'ngMessages', 'angular-loading-bar'])
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }])
    .filter('capitalize', function() {
        return function(input, all) {
          var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
          return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
        }
      })
    .controller('myCtrl', function ($scope, $http, $mdDialog) {

        $scope.type = [];
        $scope.pokemon = [];
        $scope.typeSelected = null;
        $scope.begin = 0;
        $scope.limitOffset = 20;
        $scope.order = "id";

        $http.get("https://pokeapi.co/api/v2/type/")
            .then(function (response) {
                $scope.type = response.data;
            });

        $scope.ajax = function (url) {
            $http.get(url)
                .then(function (response) {
                    var pokemon = response.data;

                    //to get pokemon id
                    pokemon.results = pokemon.results.map(function (e) {
                        var id = e.url.replace("https://pokeapi.co/api/v2/pokemon/", "").match(/\d+/g);
                        e.id = Number(id[0]);
                        return e;
                    })
                    $scope.pokemon = pokemon;
                });
        }

        $scope.showPrerenderedDialog = function(ev,url) {
            $http.get(url)
                .then(function (response) {
                    $scope.dialog = response.data;
                    $mdDialog.show({
                        contentElement: '#myDialog',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                      });
                });

            
          };

        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
        }

        $scope.previous = function () {
            $scope.begin -= $scope.limitOffset;
            if($scope.begin < 0) $scope.begin = 0;
        }

        $scope.next = function () {
            $scope.begin += $scope.limitOffset;
        }

        $scope.fnTypeSelected = function(){
            $http.get($scope.typeSelected)
                .then(function (response) {
                    var resp = response.data;
                    var res = {
                        results:0,
                        count:0
                    };
                    console.log(resp.pokemon);

                    //to get pokemon id
                    res.results = resp.pokemon.map(function (e) {
                        var id = e.pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").match(/\d+/g);
                        e.pokemon.id = Number(id[0]);
                        return e.pokemon;
                    })
                    res.count = resp.pokemon.length;
                    console.log(res);
                    console.log($scope.pokemon);
                    $scope.pokemon = res;
                });        
        }


        $scope.ajax("https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0");
    

    });