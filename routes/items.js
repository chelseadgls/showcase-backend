import { Router} from express;
import * as creatorControllers from '../controllers/items.js'
const router = Router();

router.get("/", itemControllers.getItems);

export default router;