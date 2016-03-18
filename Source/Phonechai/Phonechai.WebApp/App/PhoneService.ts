module App {
    "use strict";

    export class PhoneService {

        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        static $inject: string[] = ["$http", "$q"];

        constructor($http: angular.IHttpService, $q: angular.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }     

        Get() {
            var self = this;
            console.log("Here 2");
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };

            self.httpService.get("/api/PhoneQuery")
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

    }
    angular.module("app").service("PhoneService", PhoneService);
}