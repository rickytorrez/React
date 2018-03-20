console.log("App.js is running");

let visibility = false;

const onShowDetails = () => {
    visibility = !visibility;
    render();
};


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = { onShowDetails }>
            { visibility ? 'Hide Details' : 'Show Details' }
            </button>
            { visibility && (
                <div>
                    <p>You can finally see the deets</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();






