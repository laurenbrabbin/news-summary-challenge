const apiKey = require('./apiKey');

class NewsClient {
  
  fetchNewsData(callback) {
    const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      callback(data)
    })   
  }
}

module.exports = NewsClient

const anotherApi = new NewsClient
//let weatherArticles = ''
//anotherApi.fetchNewsData(news => {
 // weatherArticles = news
 //console.log(weatherArticles.response.results)
 //})

 //anotherApi.fetchNewsData(news => {
 //weatherArticles = news
 //console.log(weatherArticles.response.results)
 //})

