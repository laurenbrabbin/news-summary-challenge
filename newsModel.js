class NewsModel {
  constructor() {
    this.articles = []
  }

  addArticles(articles){
    this.addArticle(articles[0])
    this.addArticle(articles[1])
    this.addArticle(articles[2])
    this.addArticle(articles[3])
    this.addArticle(articles[4])
  }

  addArticle = (article) => {
    console.log(`article: ${article}`)
    const newArticle = {}
      newArticle.title = article.webTitle;
      newArticle.url = article.webUrl;
      newArticle.image = article.fields.thumbnail;

    this.articles.push(newArticle)
  }

  viewArticles(){
    return this.articles
  }
}

module.exports = NewsModel

const articles = [
  {
    id: 'business/live/2022/oct/27/shell-profits-double-95bn-european-central-bank-hike-interest-rates-lloyds-profits-slide-business-live',
    type: 'liveblog',
    sectionId: 'business',
    sectionName: 'Business',
    webPublicationDate: '2022-10-27T13:01:40Z',
    webTitle: 'Shell says it has not paid any windfall tax; European Central Bank hikes rates by 75 basis points – live',
    webUrl: 'https://www.theguardian.com/business/live/2022/oct/27/shell-profits-double-95bn-european-central-bank-hike-interest-rates-lloyds-profits-slide-business-live',
    apiUrl: 'https://content.guardianapis.com/business/live/2022/oct/27/shell-profits-double-95bn-european-central-bank-hike-interest-rates-lloyds-profits-slide-business-live',
    fields: {
      headline: 'Shell says it has not paid any windfall tax; European Central Bank hikes rates by 75 basis points – live',
      byline: 'Julia Kollewe',
      thumbnail: 'https://media.guim.co.uk/80a16cad26c431bbd99add1d61103730b67c48b4/0_179_3000_1800/500.jpg'
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News'
  },
  {
    id: 'business/2022/oct/27/shell-doubles-its-profits-to-95bn',
    type: 'article',
    sectionId: 'business',
    sectionName: 'Business',
    webPublicationDate: '2022-10-27T12:59:29Z',
    webTitle: 'Shell paid zero windfall tax in UK despite record global profits',
    webUrl: 'https://www.theguardian.com/business/2022/oct/27/shell-doubles-its-profits-to-95bn',
    apiUrl: 'https://content.guardianapis.com/business/2022/oct/27/shell-doubles-its-profits-to-95bn',
    fields: {
      headline: 'Shell paid zero windfall tax in UK despite record global profits',
      byline: 'Joanna Partridge, Jasper Jolly and agencies',
      thumbnail: 'https://media.guim.co.uk/a761e766456223055982a894f15d9cb0e15f8fdb/84_18_3143_1886/500.jpg'
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News'
  },
  {
    id: 'us-news/2022/oct/27/st-louis-school-shooting-gunman-suspect-deadly-attack',
    type: 'article',
    sectionId: 'us-news',
    sectionName: 'US news',
    webPublicationDate: '2022-10-27T12:58:11Z',
    webTitle: 'St Louis school shooting suspect had gun confiscated days before attack',
    webUrl: 'https://www.theguardian.com/us-news/2022/oct/27/st-louis-school-shooting-gunman-suspect-deadly-attack',
    apiUrl: 'https://content.guardianapis.com/us-news/2022/oct/27/st-louis-school-shooting-gunman-suspect-deadly-attack',
    fields: {
      headline: 'St Louis school shooting suspect had gun confiscated days before attack',
      byline: 'Ed Pilkington in New York',
      thumbnail: 'https://media.guim.co.uk/7c178d161f8f074031a55e2b2a55a606fa094007/0_101_3600_2160/500.jpg'
    },
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News'
  }
]

//const newsmodel = new NewsModel
//newsmodel.addArticles(articles)
//console.log(newsmodel.viewArticles())


