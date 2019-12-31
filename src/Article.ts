import ArticleHeader from './ArticleHeader';
import Novel from './Novel';
import Tag from './Tag';

export default class Article {
  constructor(
    public id: number,
    public title: string,
    public rating: number,
    public text: string,
    public createdAt: Date,
    public updatedAt: Date,
    public novelId: number,
    public novel: Novel,
    public tags: Tag[]
  ) {}
}