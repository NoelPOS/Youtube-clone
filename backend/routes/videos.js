import express from 'express'
import { verifyToken } from '../verifyToken.js'
import {
  addVideo,
  updateVideo,
  deleteVideo,
  addView,
  getVideo,
  random,
  trend,
  sub,
} from '../controllers/video.js'

const router = express.Router()

router.post('/', verifyToken, addVideo)
router.put('/', verifyToken, updateVideo)
router.delete('/', verifyToken, deleteVideo)
router.get('/find/:id', getVideo)
router.get('/view/:id', addView)
router.get('/trend', trend)
router.get('/random', random)
router.get('/sub', verifyToken, sub)

export default router
