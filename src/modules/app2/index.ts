import "../common/index";

angular.module("app2", ["app.common"]);

angular.module("app2").run(function($log) {
    $log.debug("app2 loaded");
});

angular.bootstrap(document, ["app2"], {
    strictDi: true
});
