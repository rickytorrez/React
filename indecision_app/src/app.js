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

let count = 0;
const addOne = () => {
    console.log("addOne");
};
let count1 = 0;
const substractOne = () => {
    console.log('minus one')
};

let reset = 0;
const resetCount = () => {
    console.log('reset');
};
const templateTwo = (
  <div>
    <h1>Count: { count }</h1>
    <button onClick = { addOne }>+1</button>
    <button onClick = { substractOne }>-1</button>
    <button onClick = { resetCount }>Reset</button>
  </div>
);

// console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);