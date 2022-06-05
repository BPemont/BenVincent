import clientPromise from "../../../lib/mongodb";
//pages/api/genre/[genre].js
/**
* @swagger
* /api/genres/{genre}:
*   get:
*       description: Returns movies by genre
*       parameters: 
*           -   name: genre
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
    const { genre } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find ({genres: genre}).toArray();
    //res.status(200).json({ get: req.query.genre, movies })
    res.json({ status: 200, data: movies });
}