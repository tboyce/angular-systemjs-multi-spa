import angular from "angular"

import "../shared/index.js";

var app = angular.module('changeAuto', ['shared']);

app.run(function(sharedService){
    console.log("change auto app loaded");
});

angular.element(document).ready(() => {
    angular.bootstrap(document, ['changeAuto']);
});