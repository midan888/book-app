import React, { useState, useCallback } from 'react';
import { searchBooks } from '../api';
import { Books } from './models';

interface Props {
    onData: (books: Books[]) => void;
}

const SearchForm = ({ onData }: Props) => {
    const [query, updateQuery] = useState('');

    const handleQueryChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            updateQuery(event.target.value);
        },
        [],
    );

    const handleClick = useCallback(
        (event) => {
            event.preventDefault();
            searchBooks(query).then((data) => {
                onData(data);
            });
        },
        [query],
    );

    return (
        <div>
            <form onSubmit={handleClick}>
                <input
                    name="query"
                    value={query}
                    placeholder="Please type smth"
                    onChange={handleQueryChange}
                />
                <button onClick={handleClick}>Search!</button>
            </form>
        </div>
    )
};

export default SearchForm;