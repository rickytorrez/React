'use strict';

console.log("App.js is running");

var visibility = false;

var onShowDetails = function onShowDetails() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onShowDetails },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'You can finally see the deets'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
