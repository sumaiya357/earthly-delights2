import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBar = ({setResults}) => {

    const [input,  setInput] = useState("");

    const fetchData= (value) => {
        fetch('http://localhost:5000/flowers')
        .then(res => res.json())
        .then(data => {
            const result = data.filter( (user) =>{
                return value && user && user.name && user.name.toLowerCase().includes(value)
            });
            console.log(result)
            setResults(result)
        })
        
    }

    const handleChange = (value) =>{
        setInput(value)
        fetchData(value)
    }

    const handleSearch = () => {
        const searchField = document.getElementById('search')
        const searchText = searchField.value;
        console.log('searching',searchText)
        fetchData(searchText)

    }
    return (
        <div className='w-3/6 pt-7 pb-2'>
             <div className="flex ">
               <input id='search' placeholder="Type to Search..." value={input} onChange={(e) => handleChange(e.target.value)} className="input input-bordered text-black w-3/4 " />
              <button  onClick={handleSearch}><FontAwesomeIcon className='pt-4 pl-2' icon={faSearch}></FontAwesomeIcon></button>  
             </div>
            
        </div>
    );
};

export default SearchBar;