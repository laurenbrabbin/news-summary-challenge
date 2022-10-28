const NotesModel = require('./newsModel.js')

describe('NotesModel', () => {
  it('initally returns an empty array', () => { 
    const notesModel = new NotesModel

    expect(notesModel.viewArticles()).toEqual([])
  })
  it('adds a new article to all articles', () => {
    const article = {
      webTitle: 'article title',
      webUrl: 'article url',
      fields: {
        thumbnail: 'article image'
      }
    }
    
    const notesModel = new NotesModel
    notesModel.addArticle(article)
    expect(notesModel.viewArticles()[0].title).toEqual('article title')
  })
  it('adds the articles and displays them', () => {
    const articles = [{
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
    },
    {
      webTitle: 'article title 3',
      webUrl: 'article url 3',
      fields: {
        thumbnail: 'article image 3'
      }
    },
    {
      webTitle: 'article title 4',
      webUrl: 'article url 4',
      fields: {
        thumbnail: 'article image 4'
      }
    }
  ]
    const notesModel = new NotesModel
    notesModel.addArticles(articles)
    expect(notesModel.viewArticles().length).toEqual(4)
    expect(notesModel.viewArticles()[3].title).toEqual('article title 4')
  })

  it('returns articles with matching key word', () => {
    const articles = [{
      webTitle: 'article dog',
      webUrl: 'article url',
      fields: {
        thumbnail: 'article image'
      }
    }, 
    {
      webTitle: 'article cat',
      webUrl: 'article url 2',
      fields: {
        thumbnail: 'article image 2'
      }
    },
    {
      webTitle: 'article rabbit',
      webUrl: 'article url 3',
      fields: {
        thumbnail: 'article image 3'
      }
    },
    {
      webTitle: 'article mouse',
      webUrl: 'article url 4',
      fields: {
        thumbnail: 'article image 4'
      }
    }
  ]
    const notesModel = new NotesModel
    notesModel.addArticles(articles)
    console.log(notesModel.viewArticles())
    expect(notesModel.matchingArticles('dog')[0].title).toBe('article dog')
  })
})


