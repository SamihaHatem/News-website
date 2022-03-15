const request = require('request')

const newsApi = (callbackFun) => {
    const newsURL = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=66a34cc266c64b6eaa477c8b15c876ae'

    request({ url: newsURL, json: true }, (error, response) => {
        if (error)
            callbackFun("error cccured !!!", undefined)
        else if (response.body.message)
            callbackFun(response.body.message, undefined)
        else if (response.body.articles.length == 0)
            callbackFun('NO ARTICLES', undefined)
        else
            callbackFun(undefined, response.body.articles)
    })
}

module.exports = newsApi