import React    from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBJFhza_sqntYdN3ObB9rul4TvO0yStu10';

// Crete a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
    
}

// Take this component's content and render on the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));