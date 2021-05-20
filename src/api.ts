import { Books } from "./book/models";

interface Response<T> {
    numFound: number;
    start: number;
    docs: T;
}

export const getRequest = async (url: string) => {
    const res = await fetch(url)

    return res.json();
}


export const searchBooks = async (query:string): Promise<Books[]> => {
    const res = await getRequest(`http://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);

    return res.docs.map((item: any) => ({
        id: item.key,
        author: item.author_name,
        title: item.title,
        date: item.first_publish_year,
    }));
};