'use strict';

console.log("App.js is running");

// JSX - JavaScript XML
var info = {
    title: 'Indecision App',
    subtitle: 'This is some random ass info',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        info.options.push(option);
        e.target.elements.option.value = '';
        renderOptionsApp();
    }
};

var removeAll = function removeAll() {
    console.log('all removed');
    info.options = [];
    renderOptionsApp();
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * info.options.length);
    var option = info.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var renderOptionsApp = function renderOptionsApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            info.title
        ),
        info.subtitle && React.createElement(
            'p',
            null,
            info.subtitle
        ),
        React.createElement(
            'p',
            null,
            info.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: info.options.length === 0, onClick: makeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            info.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Option: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderOptionsApp();
