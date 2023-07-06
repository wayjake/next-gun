import Pusher from 'pusher'
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const key = process.env.SOKETI_DEFAULT_APP_KEY as string
const appId = process.env.SOKETI_DEFAULT_APP_ID as string
const secret = process.env.SOKETI_DEFAULT_APP_SECRET as string

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pusher = new Pusher({
    appId,
    key,
    secret,
    host: '127.0.0.1',
    port: '6001',
    encrypted: true,
    useTLS: false,
})

app.set('PORT', process.env.PORT || 5000)

app.post('/message', (req: Request, res: Response) => {
    const payload = req.body
    pusher.trigger('chat', 'message', payload)
    res.send(payload)
})

app.listen(app.get('PORT'), () =>
    console.log(`Listening at ${app.get('PORT')}`)
)
