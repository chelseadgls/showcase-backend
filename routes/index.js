import { Router } from 'express';
import creatorRoutes from './creators.js';
import itemRoutes from './items.js';
import spaceRoutes from './spaces.js';

const router = Router();

router.get("/", (req, res) => res.send("Welcome to the Showcase API!"));

router.use("/creators", creatorRoutes);
router.use("/items", itemRoutes);
router.use("/spaces", spaceRoutes);

export default router