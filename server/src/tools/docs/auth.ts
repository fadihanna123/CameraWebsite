// Auth
/**
 * @api {post} /login check login of a user
 * @apiName Login
 * @apiGroup Auth
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json"
 *     }
 * @apiBody {String} uname Username.
 * @apiBody {String} psw Password.
 * @apiSuccess {String} accessToken login accesstoken.
 * @apiSuccess {String} author  Token author.
 * @apiSuccessExample Success-Response:
 *     {
 *       "accessToken": "XXX",
 *       "author": "Erik"
 *     }
 */
