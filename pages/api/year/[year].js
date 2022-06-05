// pages/api/year/[year].js
import clientPromise from "../../../lib/mongodb";
import { Int32 } from 'bson';

//pages/api/year/[year].js
/**
* @swagger
* /api/year/{year} :
*   get:
*       description: Returns movies by year
*       parameters: 
*           -   name: year
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
    const { year } = req.query
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db.collection("movies").find({year: Int32(year)}).toArray();
    res.status(200).json({ get: req.query.year, movies })
}
    
