import express from 'express'

const app = express()

app.get('no-graphql', function(req, res){
    res.send('get')
})

app.listen(4001, () => console.log('Server start on port 4001'))