import { Router } from 'express'
import userRouter from './userRoute'

const router = Router()

router.use('/user', userRouter)

router.get('/test', (req, res) => {
  res.send('Hello World')
})

export default router
