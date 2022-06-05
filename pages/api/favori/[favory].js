import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

/**
* @swagger
* /api/favori/{favory}:
*   post:
*     requestBody:
*       description: Endpoint for adding an comment from a user on a specific movie.
*       content:
*         application/x-www-form-urlencoded:
*           schema:
*             type: object
*             required:
*               - idUser
*               - idMovie
*             properties:
*               idUser:
*                 type: string
*                 description: user identity
*               idMovie:
*                 type: string
*                 description: movie identity
*       responses:
*           200:
*               description: Le film à bien été ajouté dans vos favoris
*           400:
*               description: Le film n'a pas pu être ajouté dans vos favoris
*/

export default async function handler(req, res) {
    const bodyParams = req.body;
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const favory = await db.collection("favory").insert(
        [
            {
            movie_id: ObjectId(bodyParams.idMovie), users_id: ObjectId(bodyParams.idUser) 
            }
        ]
    )
    res.json({ status: 200, data: favory });
}
