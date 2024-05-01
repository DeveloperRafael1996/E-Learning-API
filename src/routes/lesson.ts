import { Router } from "express"
import { getLessons, postLessons, updateLessons } from "../controllers/lessons"
const router = Router()


/**
 * http://localhost:3002/lesson [GET]
*/

router.get('/', getLessons)
router.post('/', postLessons)
router.put('/', updateLessons)

export { router }