import React from 'react';

const SearchResult = ({result}) => {
    return (
        <div className=''>
            <h3>{result.name}</h3>
        </div>
    );
};

export default SearchResult;