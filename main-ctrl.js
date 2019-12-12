'use strict';

app.controller('mainCtrl', function($scope, $http, $q){
    var main = this;

    $scope.pokemonList = [];

    main.pokemon = [];

    var promisses = [];

    const url = `https://pokeapi.co/api/v2/pokemon/`;

    for(let i = 1 ; i < 151; i++){       
        var promisse = $http.get(`${url}${i}`).then(function(res){
            var pokemon = {
                id: res.data.id,
                name: res.data.name,
                picture: res.data.sprites.front_default,
                types: res.data.types.map(types => types.type.name).join().replace(',','/')
            }

            return pokemon;
        });

        promisses.push(promisse)
    }

    $q.all(promisses).then(function(results){
        $scope.pokemonList = results;
    })

    
})