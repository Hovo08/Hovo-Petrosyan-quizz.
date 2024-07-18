import express from 'express';
import controllers from '../controllers/taskController.js';

const router = express.Router();
router.post("/newPosts", controllers.newPosts);
router.get("/getPosts", controllers.getPosts);
router.get("/getId/:id", controllers.getId);
router.put("/updatePost", controllers.updatePost);

export { router }