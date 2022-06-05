import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

/**
* @swagger
* /api/comments/{comments}:
*   post:
*       requestBody:
*           description: Endpoint for adding an comment from a user on a specific movie.
*           content:
*               application/x-www-form-urlencoded:
*                   schema:
*                       type: object
*                       required:
*                           - idUser
*                           - idMovie
*                           - comment
*                       properties:
*                           idUser:
*                               type: string
*                               description: user identity
*                           idMovie:
*                               type: string
*                               description: movie identity
*                           comment:
*                               type: string
*                               description: comment to post
*   responses:
*       200:
*           description: Votre film à bien été commenté
*       400:
*           description: Le film n'a pas pu être commenté
*/

export default async function handler2(req, res) {
    const bodyParams = req.body;
   const client = await clientPromise;
   const db = client.db("sample_mflix");
   await db.collection("comments").insert(
    [
      {  movie_id: ObjectId(bodyParams.idMovie), users_id: ObjectId(bodyParams.idUser), comment: ObjectId(insert) }
    ],
    { ordered: false }
)
res.json({ status: 200, data: "OK" });
}

