const NewsClient = require('./newsclient.js');
require('jest-fetch-mock').enableMocks()

describe('NewsClient', () => {
  it('calls fetch and loads the data', () => {
    const newsClient = new NewsClient 

    fetch.mockResponseOnce(JSON.stringify({
      response: {
        status: 'ok',
        userTier: 'developer',
        total: 2382704,
        startIndex: 1
      }
    }))

    newsClient.fetchNewsData((returnedDataFromApi) => {
      expect(returnedDataFromApi.response.status).toBe('ok')
    })
  })
})