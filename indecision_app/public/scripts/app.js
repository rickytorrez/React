'use strict';

console.log("App.js is running");

// JSX - JavaScript XML
var info = {
    title: 'Indecision App',
    subtitle: 'This is some random ass info',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        info.title
    ),
    React.createElement(
        'p',
        null,
        info.subtitle && React.createElement(
            'p',
            null,
            info.subtitle
        )
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    ),
    React.createElement(
        'p',
        null,
        info.options.length > 0 ? 'Here are your options' : 'No Options'
    )
);

var count = 0;
var addOne = function addOne() {
    console.log("addOne");
};
var count1 = 0;
var substractOne = function substractOne() {
    console.log('minus one');
};

var reset = 0;
var resetCount = function resetCount() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: substractOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: resetCount },
        'Reset'
    )
);

// console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
