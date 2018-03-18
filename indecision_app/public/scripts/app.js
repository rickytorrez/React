'use strict';

// arguments object - no longer bound with arrow functions 

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(7, 1, 1001));

// this keyword - no longer bound

var user = {
    name: 'Ricardo',
    cities: ['Cochabamba', 'NYC', 'DC'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();
