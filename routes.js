'use strict';

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'/main.html',
            controller: 'mainCtrl as main'
        })
})
