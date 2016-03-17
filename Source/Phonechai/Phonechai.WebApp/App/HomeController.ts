module App {
    export class HomeController {

        
        //static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor() {
            console.log("This is home Controller");
        }
    }

    angular.module("app").controller("HomeController", HomeController);
}