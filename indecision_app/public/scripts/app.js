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

////////////////////////////////////////////////////////////////////////////
var user = {
    name: 'Ricardo',
    age: 28,
    location: 'Bolivia'
};

function getLocaton(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            ' Location: ',
            location
        );
    }
}

var newTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocaton(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
