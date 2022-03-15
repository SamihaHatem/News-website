const express = require('express')
const path = require('path')

const news = require('./tools/newsApi')


const app = express()
const port = process.env.PORT | 3000

const PublicDir = path.join(__dirname, '../public')
app.use(express.static(PublicDir))

const PartialsDir = path.join(__dirname, '../templates/partials')
console.log(PartialsDir)

app.set('view engine', 'hbs')

const hbs = require('hbs')
const { title } = require('process')
hbs.registerPartials(PartialsDir)

const newDir = path.join(__dirname, '../templates/views')
app.set('views', newDir)


app.get('/', (req, res) => {

    news((error, data) => {
        if (error) return res.render('errorPage', {
                error: error
            })
            //console.log(data)
        res.render('index', {
            date: Date(),
            articles: data
        })
    })

})

//test
app.get('/articles', (req, res) => {
    news((error, data) => {
        if (error)
            return res.send({ error })
        res.send({
            articles: data
        })
    })
})




app.listen(port, () => {
    console.log('RUNNING ...')
})