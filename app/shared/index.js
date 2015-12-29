import angular from "angular";

import sharedService from "./sharedService.js";

angular.module('shared', [])
    .service('sharedService', sharedService);