import { Router } from "express"
import { deleteCourse, getCourse, getCourses, postCourse, updateCourse } from "../controllers/course"
const router = Router()


/**
 * http://localhost:3002/course [GET]
*/

router.get('/', getCourses)
router.get('/:id', getCourse)
router.post('/', postCourse)
router.put('/', updateCourse)
router.delete('/', deleteCourse)


export { router }