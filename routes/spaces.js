import { Router} from express;
import * as spaceControllers from '../controllers/spaces.js'
const router = Router();

router.get("/", spaceControllers.getSpaces);

export default router;