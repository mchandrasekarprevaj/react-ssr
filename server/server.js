import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from '../src/App'
import axios from 'axios'

const app = express()
const PORT = 3006

app.use('/samplePage', async (req, res, next) => {

    try {

        const response = await axios.get('http://localhost:3006/listUsers');

        fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {

            if (err) {
                console.log(err)
                return res.status(500).send("some error happened")
            }

            const replacedDatA = data.replace('</head>', `<script id="__PAGE_DATA__" type="application/json">${JSON.stringify({ users: response.data })}</script></head>`)

            return res.send(replacedDatA.replace('<div id="root"></div>', `<div id="root">${ReactDomServer.renderToString(<App users={response.data} />)}</div>`))

        })

    } catch (e) {
        console.log(e, 'e')
    }

})

app.get('/listUsers', (req, res) => {

    fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
        res.end(data)
    })

})

let postData = [];

app.post('/submit', (req, res) => {
    const data = req.body;

    // Output the book to the console for debugging
    console.log(req.body);
    postData.push(data);

    res.send('request data is added to the database', req.body);
})

app.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }))

app.listen(PORT, () => console.log(`App launched on ${PORT}`))
