const NewsModel = require('./newsModel.js')
const NewsView = require('./newsView.js')
const NewsClient = require('./newsClient.js')

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client)


//view.displayArticles()