module App {
    export class PhoneQueryController {

        Phones: Phone[];
        private phoneService: PhoneService;
        static $inject = ["PhoneService"];
        //static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor(phoneSvc: PhoneService) {
            console.log("This is Phone Query Controller");
            this.phoneService = phoneSvc;
            this.Phones = [];
            this.Get();
        }

        Get() {
            var self = this;
            console.log("Here 1");
            this.phoneService.Get()
                .then((result: any) => { console.log("Here 3"); self.Phones = result.data as Phone[]; },
                       error => { alert(error); });
        }
    }

    angular.module("app").controller("PhoneQueryController", PhoneQueryController);
}