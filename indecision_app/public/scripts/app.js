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
    count = count + 1;
    renderCounterApp();
};
var count1 = 0;
var substractOne = function substractOne() {
    count = count - 1;
    renderCounterApp();
};

var reset = 0;
var resetCount = function resetCount() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
