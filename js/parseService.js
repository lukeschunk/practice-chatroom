var app = angular.module('chatroom');

app.service('parseService', function ($http) {
    //Here you'll need to create two methods. One called postData and the other called getData.

    //On the lines below create a getData method. This method will retrieve data from the parse backend.
    //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
    //Be sure to return whatever gets returned from $http so you can call .then in your controller.
    this.getData = function (result) {
        $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
        }).then(function successCallback(result) {

            return result;
            
        }, function errorCallback(response) {
            console.log("error");
        });
    }


    //On the line below create the postData method. This method will add data to the parse backend.
    //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
    //Because we're making a POST request, we need a way to tell parse the data we want to give it, 
    //in your $http call (along with url and method) have a data property which has a value that is equal to another object which a key of text and a value of the message being passed to parse. IE data: {text: yourMessage} 
    //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.

    this.postData = function (yourMessage) { //do I have to pass in yourMessage to this? 
        $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/chat',
            data: {text: yourMessage} //I'm not exactly sure what the yourMessage is and how it fits into the whole 
        }).then(function successCallback(result) {

            return result;
            
        }, function errorCallback(response) {
            console.log("error2");
        });
    }


});

