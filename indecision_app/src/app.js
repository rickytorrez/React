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
    count = count + 1;
    renderCounterApp();
};
let count1 = 0;
const substractOne = () => {
    count = count - 1;
    renderCounterApp();
};

let reset = 0;
const resetCount = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
          <h1>Count: { count }</h1>
          <button onClick = { addOne }>+1</button>
          <button onClick = { substractOne }>-1</button>
          <button onClick = { resetCount }>Reset</button>
        </div>
      );
ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();