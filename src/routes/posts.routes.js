// src/routes/posts.routes.js

const express = require('express');
const router = express.Router();

// 1. Import the controller
const postController = require('../controllers/posts.controller.js');

// 2. Use the controller function as the route handler
// The router's job is now just to connect the path '/' to the 'getAllPosts' function.
router.get('/', postController.getAllPosts);

// 3. Add route for getting a single post by ID
// The /:postId syntax creates a route parameter that can be accessed via req.params.postId
router.get('/:postId', postController.getPostById);

// We can remove the old inline function entirely!
// router.get('/', (req, res) => { ... }); // This is now gone

module.exports = router;