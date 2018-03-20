
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