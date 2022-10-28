class NewsModel {
  constructor() {
    this.articles = []
  }

  addArticles(articles){
    this.addArticle(articles[0])
    this.addArticle(articles[1])
    this.addArticle(articles[2])
    this.addArticle(articles[3])
    this.addArticle(articles[4])
    this.addArticle(articles[5])
    this.addArticle(articles[6])
    this.addArticle(articles[7])
    this.addArticle(articles[8])
    this.addArticle(articles[9])
  }

  addArticle = (article) => {
    const newArticle = {}
      newArticle.title = article.webTitle;
      newArticle.url = article.webUrl;
      newArticle.image = article.fields.thumbnail;

    this.articles.push(newArticle)
  }

  viewArticles(){
    return this.articles
  }

  refreshNews(){
    this.articles = []
  }
}

module.exports = NewsModel

