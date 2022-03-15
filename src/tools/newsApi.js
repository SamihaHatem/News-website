const request = require('request')

const newsApi = (callbackFun) => {
    const newsURL = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey='

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