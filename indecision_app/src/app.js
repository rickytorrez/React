console.log("App.js is running");

// JSX - JavaScript XML
const info = {
    title: 'Indecision App',
    subtitle: 'This is some random ass info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        info.options.push(option);
        e.target.elements.option.value = '';
        renderOptionsApp();
    }
};

const removeAll = () => {
    console.log('all removed');
    info.options = [];
    renderOptionsApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * info.options.length);
    const option = info.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById('app');

const renderOptionsApp = () => {
    const template = (
        <div>
            <h1>{ info.title }</h1>
            { info.subtitle && <p>{info.subtitle}</p> }
            <p>{ info.options.length  > 0 ? 'Here are your options' : 'No options' }</p>
            <button disabled = { info.options.length === 0 } onClick = { makeDecision }>What should I do?</button>
            <button onClick = { removeAll }>Remove All</button>
            <ol>
            {
                info.options.map((option) => {
                    return <li key= { option }>Option: { option }</li>;
                })
            }
            </ol>
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
ReactDOM.render(template, appRoot);
};

renderOptionsApp();