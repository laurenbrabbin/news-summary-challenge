class NewsModel {
  constructor() {
    this.articles = []
    this.keyword = ''
    this.relevantArticles = []
  }

  addArticles(articles){
    this.articles = []
    this.addArticle(articles[0])
    this.addArticle(articles[1])
    this.addArticle(articles[2])
    this.addArticle(articles[3])
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
    if(article.title.toLowerCase().includes(this.keyword.toLowerCase())){
      this.relevantArticles.push(article) 
    }
  }

  matchingArticles(keyword){
    this.relevantArticles = []
    this.keyword = keyword
    this.articles.map(this.matchingKeyword)
    return this.relevantArticles
  }
}

module.exports = NewsModel

