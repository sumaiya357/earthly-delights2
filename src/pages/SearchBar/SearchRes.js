import React from 'react';
import SearchResult from './SearchResult';

const SearchRes = ({results}) => {
    console.log(results.name)
    return (
        <div>
           {
            results.map((result, _id) => {
                return <SearchResult result={result} key={_id}/>
            })
           }
        </div>
    );
};

export default SearchRes;