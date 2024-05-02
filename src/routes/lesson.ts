import { Router } from "express"
import { getLessons, postLessons, updateLessons, lessionAproved } from "../controllers/lessons"
const router = Router()


/**
 * http://localhost:3002/lesson [GET]
*/

router.get('/', getLessons)
router.post('/', postLessons)
router.post('/', updateLessons)
router.post('/aproved', lessionAproved)

export { router }