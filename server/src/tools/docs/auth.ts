// Auth
/**
 * @api {post} /login Login a user
 * @apiName Login
 * @apiGroup Auth
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json"
 *     }
 * @apiBody {String} uname Username.
 * @apiBody {String} psw Password.
 * @apiSuccess {String} accessToken Login accesstoken.
 * @apiSuccess {String} author Token author.
 * @apiSampleRequest https://localhost:5000/login
 * @apiSuccessExample Success-Response:
 *     {
 *       "accessToken": "XXX",
 *       "author": "Erik"
 *     }
 */

/**
 * @api {post} /register Register a user
 * @apiName Register
 * @apiGroup Auth
 * @apiHeaderExample {json} Header-Example:
 *                  {
 *                    "Content-Type": "application/json"
 *                  }
 * @apiBody {String} uname Username.
 * @apiBody {String} psw Password.
 * @apiBody {String} repsw Retyped password.
 * @apiBody {String} email Email-address.
 * @apiBody {String} mobnr Mobile-number.
 * @apiSuccess {String} accessToken Login accesstoken.
 * @apiSuccess {String} author Token author.
 * @apiSampleRequest https://localhost:5000/register
 * @apiSuccessExample Success-Response:
 *                    {
 *                      "accessToken": "XXX",
 *                      "author": "Erik"
 *                    }
 */
