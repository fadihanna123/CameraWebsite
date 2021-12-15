// Posts
/**
 * @api {get} /posts Get all Posts
 * @apiName Get all Posts
 * @apiGroup Posts
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json"
 *     }
 * @apiSuccess {Number} id Id of the Post.
 * @apiSuccess {String} title Title of the Post.
 * @apiSuccess {String} post Post content.
 * @apiSuccess {String} author Post author.
 * @apiSuccessExample Success-Response:
 *     [{
 *       "id": 1,
 *       "title": "Test",
 *        "post" : "Post One",
 *        "author" : "Erik"
 *     }]
 */

/**
 * @api {post} /posts Add a post
 * @apiName Add a Post
 * @apiGroup Posts
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "Authorization" : "Bearer XXX"
 *     }
 * @apiBody {Number} id Id of the Post.
 * @apiBody {String} title Title of the Post.
 * @apiBody {String} post Post content.
 * @apiBody {String} author Post author.
 * @apiSuccess {Number} id Id of the Post.
 * @apiSuccess {String} title Title of the Post.
 * @apiSuccess {String} post Post content.
 * @apiSuccess {String} author Post author.
 * @apiError (String) Forbidden.
 * @apiSampleRequest http://localhost:5000/posts
 * @apiSuccessExample Success-Response:
 *     {
 *       "id": 2,
 *       "title": "Test",
 *        "post" : "Post One",
 *        "author" : "Erik"
 *     }
 */

/**
 * @api {delete} /posts/:id Delete a post
 * @apiName Delete a Post
 * @apiGroup Posts
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "Authorization" : "Bearer XXX"
 *     }
 * @apiParam {String} id Id of the Todo.
 * @apiSampleRequest http://localhost:5000/posts/:id
 * @apiError (String) Forbidden.
 */
