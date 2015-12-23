import "angular";

angular.module("app.common", []);

angular.module("app.common").run(function($log) {
    $log.debug("app.common loaded");
});