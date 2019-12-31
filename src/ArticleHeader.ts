import Tag from './Tag';

export default class ArticleHeader {
  constructor(
    public id: number,
    public title: string,
    public rating: number,
    public createdAt: Date,
    public updatedAt: Date,
    public tags: Tag[]
  ) {}
}