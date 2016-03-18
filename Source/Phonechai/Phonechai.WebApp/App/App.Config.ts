module App {
    export class AppConfig {

        private stateProvider: angular.ui.IStateProvider;
        private urlProvider: angular.ui.IUrlRouterProvider;

        static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            console.log('i m in appconfig.ts');
            $stateProvider
                .state("root", {
                    abstract: true,
                    url: "",
                    template: "<span>Hello World.</span><div ui-view class=\"container-fluid slide\"></div>",
                })
                .state("root.home", {
                    url: "/",
                    templateUrl: "Partials/Home/home.tpl.html",
                    controller: "HomeController",
                    controllerAs: "vm"

                }).state("root.signin",{
                url: "/signin",
                templateUrl: "Partials/Account/signin.tpl.html"
                })
                .state("root.phones", {
                    url: "/Phones",
                    templateUrl: "Partials/Phone/phones.tpl.html",
                    controller: "PhoneQueryController",
                    controllerAs: "vm"
                })
                .state("root.phone-entry", {
                    url: "/phone-entry",
                    templateUrl: "partials/Phone/phone-entry.tpl.html",
                    controller: "PhoneController",
                    controllerAs: "vm"
                })
                .state("root.phone-edit", {
                    url: "/phone-edit/:id",
                    templateUrl: "partials/Phone/phone-entry.tpl.html",
                    controller: "PhoneController",
                    controllerAs: "vm"
                });
        }
    }
  
    angular.module("app", ["ngResource","ui.router"]);
    angular.module("app").config(AppConfig);
}