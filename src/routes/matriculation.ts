import { Router } from "express"
const router = Router()
import { postMatriculation  } from "../controllers/matriculations"



/**
 * http://localhost:3002/matriculation [GET]
*/


router.post('/', postMatriculation)
export { router }