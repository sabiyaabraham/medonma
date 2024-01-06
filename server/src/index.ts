import dotenv from 'dotenv'
import axios from 'axios'
import http from 'http'
import { Server } from 'socket.io'

import { User } from './src/Models'
import app from './src/server'

dotenv.config({ path: './config.env' })

require('./lib/account')
require('@ajayos/nodelog')

const server: http.Server = http.createServer(app)

const io: Server = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'PATCH', 'POST', 'DELETE', 'PUT'],
  },
})

const port: number = Number(process.env.PORT) || 3000

server.listen(port, async () => {
  console.log(`App running on port = ${port} ...`)

  try {
    // Fetch public IP using an external service
    const {
      data: { ip },
    } = await axios.get('https://api64.ipify.org?format=json')
    console.log(`Public IP Address: ${ip}`)
  } catch (err: any) {
    console.error('Error fetching public IP:', err.message)
  }
})

process.on('uncaughtException', (err) => {
  console.log(err)
  console.log('UNCAUGHT Exception! Shutting down ...')
  // run npm start
  process.exit(1) // Exit Code 1 indicates that a container shut down, either because of an application failure.
})

process.on('unhandledRejection', (err) => {
  console.log(err)
  console.log('UNHANDLED REJECTION! Shutting down ...')
  server.close(() => {
    process.exit(1) // Exit Code 1 indicates that a container shut down, either because of an application failure.
  })
})
