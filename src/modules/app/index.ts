import "../common/index";

angular.module("app", ["app.common"]);

angular.module("app").run(function($log) {
    $log.debug("app loaded");
});

angular.bootstrap(document, ["app"], {
    strictDi: true
});
