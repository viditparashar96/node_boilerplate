import { hello_world } from "../controllers/hello-controller";

const express=require('express');
const router=express.Router();


/**
 * @swagger
 * /:
 *   get:
 *     summary: Get Hello World
 *     description: Returns a "Hello World!" message.
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *         examples:
 *           application/json:
 *             message: Hello World!
 */
router.get('/',hello_world);

module.exports=router;