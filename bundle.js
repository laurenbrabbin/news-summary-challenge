(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.articles = [];
        }
        addArticles(articles) {
          this.addArticle(articles[0]);
          this.addArticle(articles[1]);
          this.addArticle(articles[2]);
          this.addArticle(articles[3]);
          this.addArticle(articles[4]);
          this.addArticle(articles[5]);
          this.addArticle(articles[6]);
          this.addArticle(articles[7]);
          this.addArticle(articles[8]);
          this.addArticle(articles[9]);
        }
        addArticle = (article) => {
          const newArticle = {};
          newArticle.title = article.webTitle;
          newArticle.url = article.webUrl;
          newArticle.image = article.fields.thumbnail;
          this.articles.push(newArticle);
        };
        viewArticles() {
          return this.articles;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        newArticle = (article) => {
          const newParagraph = document.createElement("div");
          newParagraph.textContent = article.title;
          newParagraph.className = "article";
          this.mainContainerEl.append(newParagraph);
        };
        displayArticles() {
          this.client.fetchNewsData((data) => {
            const articles = data.response.results;
            this.model.addArticles(articles);
            this.model.viewArticles().map(this.newArticle);
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // apiKey.js
  var require_apiKey = __commonJS({
    "apiKey.js"(exports, module) {
      module.exports = "02257cd4-13fe-45bf-b646-9a292f5a49b4";
    }
  });

  // newsClient.js
  var require_newsClient = __commonJS({
    "newsClient.js"(exports, module) {
      var apiKey = require_apiKey();
      var NewsClient2 = class {
        fetchNewsData(callback) {
          const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;
          fetch(apiUrl).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NewsClient2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var NewsClient = require_newsClient();
  var client = new NewsClient();
  var model = new NewsModel();
  var view = new NewsView(model, client);
  view.displayArticles();
})();
