export default class Tag {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public subcategory: string,
    public referenceCount: number
  ){}
}