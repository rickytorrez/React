'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            // return 'Hi! ' + this.name + ', How are you?';
            return 'Hi, I am ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' years old.';
        }
    }]);

    return Person;
}();

// class Student extends Person {
//     constructor (name, age, major){
//         super(name, age);
//         this.major = major;
//     }
//     hasMajor () {
//         return !!this.major;
//     }
//     getDescription () {
//         let description = super.getDescription();

//         if (this.hasMajor()){
//             description += ` Their major is ${this.major}. `;
//         }
//         return description;
//     }
// }


var Traveler = function (_Person) {
    _inherits(Traveler, _Person);

    function Traveler(name, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name));

        _this.homeLocation = homeLocation;
        return _this;
    }

    _createClass(Traveler, [{
        key: 'hasHomeLocation',
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }
    }, {
        key: 'getGreeting',
        value: function getGreeting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);

            if (this.hasHomeLocation()) {
                greeting += ' I\'m visiting from ' + this.homeLocation;
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Traveler('Ricardo Torrez', 'Washington D.C.'); // New instance of Person
console.log(me.getGreeting());

var other = new Traveler();
console.log(other.getGreeting());
