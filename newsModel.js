class NewsModel {
  constructor() {
    this.articles = []
    this.keyword = 'undefined'
    this.relevantArticles = []
  }

  addArticles(articles){
    this.articles = []
    this.articles = []
    articles.forEach((article) => {
      this.addArticle(article)
    })
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


  matchingKeyword = (article) => {
    if (article.title.includes(this.keyword)) {
      this.relevantArticles.push(article) 
    }
  }

  matchingArticles(keyword) {
    this.relevantArticles = []
    this.keyword = keyword
    this.articles.map(this.matchingKeyword)
    return this.relevantArticles
  }
}

module.exports = NewsModel

