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
          this.keyword = "undefined";
          this.relevantArticles = [];
        }
        addArticles(articles) {
          this.articles = [];
          this.articles = [];
          articles.forEach((article) => {
            this.addArticle(article);
          });
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
        matchingKeyword = (article) => {
          if (article.title.includes(this.keyword)) {
            this.relevantArticles.push(article);
          }
        };
        matchingArticles(keyword) {
          this.relevantArticles = [];
          this.keyword = keyword;
          this.articles.map(this.matchingKeyword);
          return this.relevantArticles;
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
          this.buttonEl = document.querySelector("#refresh-news-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayArticles();
          });
          this.searchButtonEl = document.querySelector("#search-news-button");
          this.searchButtonEl.addEventListener("click", () => {
            const keyword = document.querySelector("#search-term").value;
            this.displayRelevantArticles(keyword);
            const inputEl = document.querySelector("#search-term");
            inputEl.value = "";
          });
        }
        newArticle = (article) => {
          const newArticle = document.createElement("a");
          const newImage = document.createElement("img");
          const text = document.createElement("h4");
          text.innerHTML = article.title;
          newImage.src = article.image;
          newArticle.href = article.url;
          newArticle.append(text);
          newArticle.append(newImage);
          newArticle.className = "article";
          this.mainContainerEl.append(newArticle);
        };
        displayArticles() {
          document.querySelectorAll(".article").forEach((article) => {
            article.remove();
          });
          this.client.fetchNewsData((data) => {
            let articles = data.response.results;
            this.model.addArticles(articles);
            this.model.viewArticles().map(this.newArticle);
          });
        }
        displayRelevantArticles(keyword) {
          document.querySelectorAll(".article").forEach((article) => {
            article.remove();
          });
          this.client.fetchNewsData((data) => {
            let articles = data.response.results;
            this.model.addArticles(articles);
            this.model.matchingArticles(keyword).map(this.newArticle);
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
      var anotherApi = new NewsClient2();
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsView = require_newsView();
  var NewsClient = require_newsClient();
  var client = new NewsClient();
  var model = new NewsModel();
  var view = new NewsView(model, client);
})();
