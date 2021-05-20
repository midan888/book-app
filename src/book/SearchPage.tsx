import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BookList from './BookList';
import { Books } from './models';
import SearchForm from './SearchForm';

const SearchPage = () => {
    const [books, updateBooks] = useState<Books[]>([]);
    const [selectedBook, udpateSelectedBook] = useState<Books | undefined>();

    const handleBookSelect = (book: Books) => {
        udpateSelectedBook(book);
    }

    return (
        <div>
            <SearchForm onData={updateBooks}/>
            {
                selectedBook ? (
                    <BookDetails book={selectedBook} />
                ) : (
                    <BookList books={books} onBookSelect={handleBookSelect}/>
                )
            }
        </div>
    )
};

export default SearchPage;