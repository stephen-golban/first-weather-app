import React from 'react';
import '../CSS/index.css';

const SearchForm = props =>{
    return(
        <div className="welcome-container fade-in">
            <form onSubmit={props.loadWeather}>
                <h1>Forecu Weather</h1>
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search location ..." 
                    name="search"
                    autoFocus
                    autoComplete="off"
                />
            </form>
        </div>

    )
}
export default SearchForm;