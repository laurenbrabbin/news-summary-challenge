/**
 * @jest-environment jsdom
 */

 const fs = require('fs'); 
 const NewsModel = require('./newsModel');
 const NewsView = require('./newsView.js'); 

 describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html'); 
  });

  xit('displays articles', () => {
    
    const newsClient = {
      fetchNewsData: () => [{
        webTitle: 'article title',
        webUrl: 'article url',
        fields: {
          thumbnail: 'article image'
        }
      }, 
      {
        webTitle: 'article title 2',
        webUrl: 'article url 2',
        fields: {
          thumbnail: 'article image 2'
        }
      }]
    }

    const newsModel = {
       addArticles: () => '',
       addArticle: () => '',
       viewArticles: () => {[
        {
          title: 'article title',
          url: 'article url',
          image: 'article image'
        },
        {
          title: 'article title 2',
          url: 'article url 2',
          image: 'article image 2'
        }
      ]}
    }

    const newsView = new NewsView(newsModel, newsClient)
    newsView.displayArticles()
    console.log(document.querySelectorAll('article'))
    expect(document.querySelectorAll('article').length).toBe(2); 
  })


  xit('displays articles', () => {
    
    const newsClient = {
      fetchNewsData: () => [{
        webTitle: 'article title',
        webUrl: 'article url',
        fields: {
          thumbnail: 'article image'
        }
      }, 
      {
        webTitle: 'article title 2',
        webUrl: 'article url 2',
        fields: {
          thumbnail: 'article image 2'
        }
      }]
    }

    const newsModel = {
       addArticles: () => '',
       addArticle: () => '',
       viewArticles: () => {[
        {
          title: 'article title',
          url: 'article url',
          image: 'article image'
        },
        {
          title: 'article title 2',
          url: 'article url 2',
          image: 'article image 2'
        }
      ]}
    }

    const newsView = new NewsView(newsModel, newsClient)
    newsView.displayArticles()
    console.log(document.querySelectorAll('div'))
    expect(document.querySelectorAll('div').length).toBe(2); 
  })
})
