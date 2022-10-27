const got = require('got');
const apiKey = require('./apiKey');

class NewsClient {
  
  fetchNewsData(callBack) {
    const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;
    got(apiUrl).then((response) => {
      const newsData = callBack(JSON.parse(response.body)); //JSON.parse(response.body) to transform the JSON string received into a JavaScript object
      return newsData
    });
  }
}

module.exports = NewsClient

//const anotherApi = new NewsClient
//let weatherArticles = ''
//anotherApi.fetchNewsData(news => {
 // weatherArticles = news
 // console.log(weatherArticles.response.results)
 //})

 //anotherApi.fetchNewsData(news => {
 // weatherArticles = news
 // console.log(weatherArticles)
 //})

