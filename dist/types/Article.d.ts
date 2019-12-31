import Novel from './Novel';
import Tag from './Tag';
export default class Article {
    id: number;
    title: string;
    rating: number;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    novelId: number;
    novel: Novel;
    tags: Tag[];
    constructor(id: number, title: string, rating: number, text: string, createdAt: Date, updatedAt: Date, novelId: number, novel: Novel, tags: Tag[]);
}
