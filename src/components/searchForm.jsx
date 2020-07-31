import React from 'react';
import '../CSS/index.css';

const SearchForm = props =>{
    return(
        <div className="welcome-container">
            <h1 className="logo">Forecu Weather</h1>
            <form onSubmit={props.loadWeather}>
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Enter location ..." 
                    name="search"
                    autoFocus
                    autoComplete="off"
                />
            </form>
        </div>

    )
}
export default SearchForm;