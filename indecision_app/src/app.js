console.log("App.js is running");

// JSX - JavaScript XML
const info = {
    title: 'Indecision App',
    subtitle: 'This is some random ass info',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{ info.title }</h1>
        <p>{ info.subtitle && <p>{info.subtitle}</p> }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <p>{ info.options.length > 0 ? 'Here are your options' : 'No Options' }</p>
    </div>
);

////////////////////////////////////////////////////////////////////////////
const user = {
    name: 'Ricardo',
    age: 28,
    location: 'Bolivia'
}

function getLocaton (location) {
    if (location){
        return <p> Location: {location}</p>
    }
}

const newTemplate = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1>
        { (user.age && user.age >= 18) && <p>Age: { user.age }</p> }
        { getLocaton(user.location) }

    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);