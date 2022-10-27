class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  newArticle = (article) => {
    const newParagraph = document.createElement('div')
    newParagraph.textContent = article.title;
    newParagraph.className = 'article';
    this.mainContainerEl.append(newParagraph);
  }

  displayArticles(){
    this.client.fetchNewsData((data) => {
      const articles = data.response.results
      this.model.addArticles(articles)
      this.model.viewArticles().map(this.newArticle)
    })
  }
}

module.exports = NewsView