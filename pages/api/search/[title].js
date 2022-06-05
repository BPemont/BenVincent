// pages/api/search/[title].js
import clientPromise from "../../../lib/mongodb";

//pages/api/search/[title].js
/**
* @swagger
* /api/search/{title} :
*   get:
*       description: Returns movies by title
*       parameters: 
*           -   name: title
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
    const { title } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find({title: title}).toArray();
    if (movies != 0) {
        res.json({ status: 200, data: movies });
    }
    else {
    res.json({ status: 400, data: {message: "Ce film n'existe pas !"} });
    }
}