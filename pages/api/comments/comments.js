import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

/**
* @swagger
* /api/movies/comments/addComment:
*   post:
*       requestBody:
*           description: Endpoint for adding an comment from a user on a specific movie.
*           content:
*               application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       required:
*                           - idUser
*                           - nameUser
*                           - emailUser
*                           - idMovie
*                           - comment
*                       properties:
*                           idUser:
*                               type: string
*                               description: user identity
*                           nameUser:
*                               type: string
*                               description: user name
*                           emailUser:
*                               type: string
*                               description: user mail
*                           idMovie:
*                               type: string
*                               description: movie identity
*                           comment:
*                               type: string
*                               description: comment to post
*   responses:
*       200:
*           description: Success Response
*       400:
*           description: Error Response
*/

export default async function handler2(req, res) {
   const bodyParams = req.body;
   const client = await clientPromise;
   const db = client.db("sample_mflix");
   await db.collection("comments").insert(
    [
      {  name: bodyParams.nameUser, email: bodyParams.emailUser, movie_id: ObjectId(bodyParams.idMovie), text: bodyParams.comment,date: Date()}
    ],
    { ordered: false }
)
res.json({ status: 200, data: "OK" });
}
