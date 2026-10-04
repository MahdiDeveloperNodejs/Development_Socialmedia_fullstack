/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth models and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   name
 *                  -   email
 *                  -   username
 *                  -   password
 *              properties:
 *                  name:
 *                       type: string
                  profilePicture:
 type: string
 description: Optional profile image URL; defaults to /images/profile-1.jpg
 *                  email:
 *                      type: string
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *          CheckOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
 *                      type: string
 */

/**
 * @swagger
 *
 * /Auth/create:
 *  post:
 *      summary: Send OTP for login user
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOTP'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/SendOTP'
 *      responses:
 *          200:
 *              description: success
 */
