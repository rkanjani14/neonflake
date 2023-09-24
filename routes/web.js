import express from 'express'
import uploadController from '../controllers/uploadController.js'
import upload from '../multer/multer.js'
const router = express.Router()
router.get('/', uploadController.homeController)
router.post('/',upload.fields([{name:"thumbnail"},{name:"video"}]),uploadController.homeController_process)
router.get('/detail',uploadController.detailController)
router.get('/video/:id',uploadController.videoController)
export default router