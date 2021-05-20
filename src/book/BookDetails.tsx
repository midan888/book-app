import React from 'react';
import { Books } from './models';
interface Props {
        book: Books;
}

const BookDetails = ({ book }: Props) => {
    return (
        <pre>
            {JSON.stringify(book)}
        </pre>
    );
};

export default BookDetails;