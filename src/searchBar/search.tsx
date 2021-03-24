import React, {useRef} from 'react';
import ISearchProps from './ISearchProps';
import searchIcon from '../assets/searchIcon.png'
import './SearchBar.css'
const Search: React.FC<ISearchProps> = () => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const searchSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
    };
  
    //send this props back to the postPage
    return (

    <div className="searchBar">
        <form onSubmit={searchSubmitHandler}>
            <label htmlFor="search-text"><h1>How can we help you?</h1> </label>
            <br/><br/>
            <div className="searchBarInput"><input type="text" placeholder="Search" id="search-text" ref={textInputRef}/>
                <img src={searchIcon} alt=""/></div>
                {/* <button type="submit"> Search</button> */}
        </form>
    </div>

    );
}
    export default Search;