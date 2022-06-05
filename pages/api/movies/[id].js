// pages/api/movies/id/[id].js
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

/**
* @swagger
* /api/movies/{id}:
*   get:
*       description: Returns movies by id
*       parameters: 
*           -   name: id
*               in: path
*               description: some description
*               required: true
*               type: char
*               collectionFormat: multi
*       responses:
*           200:
*               description: Voici les films correspondant :
            400:
                description: Aucuns films dans notre base de donnée
*/

export default async function handler(req, res) {
    const { id } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find({_id: ObjectId(id)}).toArray();
    if (movies != 0) {
        res.json({ status: 200, data: movies });
    }
    else {
    res.json({ status: 400, data: {message: "Cet Id n'existe pas !"} });
    }
}