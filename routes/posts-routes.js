import express from "express"
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId", verifyToken, getUserPosts);

router.patch("/:id/likes", verifyToken, likePost); //changed from video (id to postId)

export default router
