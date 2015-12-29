import angular from "angular"

import "../shared/index.js";

var app = angular.module('newAuto', ['shared']);

app.run(function(sharedService){
    console.log("new auto app loaded");
});

angular.element(document).ready(() => {
    angular.bootstrap(document, ['newAuto']);
});