"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Article {
    constructor(id, title, rating, text, createdAt, updatedAt, novelId, novel, tags) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.text = text;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.novelId = novelId;
        this.novel = novel;
        this.tags = tags;
    }
}
exports.default = Article;
//# sourceMappingURL=Article.js.map