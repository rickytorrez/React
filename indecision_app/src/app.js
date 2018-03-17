// Contains JSX

console.log("App.js is running");

// JSX - JavaScript XML
var info = {
    title: 'Indecision App',
    subtitle: 'This is some random ass info'
}
var template = (
    <div>
        <h1>{ info.title }</h1>
        <p>{ info.subtitle }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Ricardo',
    age: 28,
    location: 'Bolivia'
}
var newTemplate = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location } </p>
    </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);