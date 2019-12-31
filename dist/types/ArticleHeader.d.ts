import Tag from './Tag';
export default class ArticleHeader {
    id: number;
    title: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    tags: Tag[];
    constructor(id: number, title: string, rating: number, createdAt: Date, updatedAt: Date, tags: Tag[]);
}
