angular.module("pamm").controller("userCtrl", ["$rootScope", "$state", "$log", "$uibModal", "userContext",
    function ($rootScope, $state, $log, $uibModal, userContext) {
        var vm = this;

        (function init() {
            vm.user = userContext.getUser();

            if (!vm.user) {
                $log.info("User has not logged on or has pressed refreshed");
                $state.go("user.login");
            }
        })();

        vm.logout = function () {
            $$dialog.confirm("Are you sure that you want to logout?", "Logout", function () {
                userContext.logout();
                $state.go("user.login");
            });
        };

        vm.showAbout = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "feature/common/about/about.html",
                controller: "aboutCtrl",
                size: "lg",
                backdrop: 'static'
            });
        };

        vm.showHelp = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "feature/common/help/help.html",
                controller: "helpCtrl",
                size: "lg",
                backdrop: 'static'
            });
        };

        vm.isAtHome = function () {
            return $state.is("user.home");
        };

        vm.isAtProjects = function () {
            return $state.is("user.project");
        };

        vm.navigateToProjects = function () {
            $state.go("user.project");
        };

        vm.navigateToHome = function () {
            $state.go("user.home");
        };

        vm.getSelectedProject = function () {
            return userContext.getSelectedProject();
        };

        vm.hasSelectedProject = function () {
            return !userContext.getSelectedProject();
        };
    }]);
