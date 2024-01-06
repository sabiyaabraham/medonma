import express, { Application } from 'express'
import path from 'path'
import routes from './Routes/index'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'cookie-session'

const app: Application = express()

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PATCH', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  }),
)

app.use(cookieParser())

app.use(express.json({ limit: '10kb' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'MEDONMA',
  }),
)

app.use(routes)

app.use(express.static(path.join(__dirname, 'public')))

export default app
