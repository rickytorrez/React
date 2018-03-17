'use strict';

// Contains JSX

console.log("App.js is running");

// JSX - JavaScript XML
var info = {
    title: 'Indecision App',
    subtitle: 'This is some random ass info'
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
        info.subtitle
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
    )
);

var user = {
    name: 'Ricardo',
    age: 28,
    location: 'Bolivia'
};
var newTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location,
        ' '
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
