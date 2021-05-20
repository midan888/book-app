import React from 'react';
import { Books } from './models';

interface Props {
    books: Books[];
    onBookSelect: (book: Books) => void;
}

const BookList = ({ books, onBookSelect }: Props) => {

    const handleClick = (item: Books) => () => {
        onBookSelect(item);
    };

    return (
        <div>
            {books.map(item => (
                <div onClick={handleClick(item)}>
                    <h2>{item.title} - {item.author}</h2>
                    <p>Date {item.date}</p>
                </div>
            ))}
        </div>
    )
}

export default BookList;