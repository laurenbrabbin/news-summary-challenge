class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#refresh-news-button');

    this.buttonEl.addEventListener('click', () => {
      this.model.refreshNews()
      this.displayArticles()
    });
  }

  newArticle = (article) => {
    const newArticle = document.createElement('a');
    const newImage = document.createElement('img');
    const text = document.createElement('h4');
    
    text.innerHTML = article.title;
    newImage.src = article.image;
    newArticle.href = article.url;
    
    newArticle.append(text)
    newArticle.append(newImage)
    newArticle.className = 'article';

    this.mainContainerEl.append(newArticle);
  }

  displayArticles(){
    document.querySelectorAll('.article').forEach(article => {
      article.remove()
    })

    this.client.fetchNewsData((data) => {
      let articles = data.response.results
      this.model.addArticles(articles)
      this.model.viewArticles().map(this.newArticle)
    })
  }
}

module.exports = NewsView