interface IBookData {
    title: string;
    authors: string;
    average_rating: number;
    num_pages: number;
    reviews: number;
    publisher: string;
    price: number;
    pic?: ImageSourcePropType;
    is_staff_pick: boolean;
    publish_date: string;
    price_before?: number;
}

type IBookStrings = 'modern' | 'agathe' | 'classic' | 'zen' | 'dad';

interface OpenLibraryResponse {
    author_name: string[];
    cover_i: number;
    first_publish_year: number;
    id_goodreads: string[];
    isbn: string[];
    key: string;
    title: string;
}
