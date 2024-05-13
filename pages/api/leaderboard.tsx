import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import Card, {Cards} from '../../models/Card'
// const MONGODBURI = process.env.MONGODBURI!
import clientPromise from '../../lib/mongodb'
import { MongoClient } from 'mongodb'

// const MONGODBURI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'
const MONGODBURI='mongodb+srv://indigoinsaan:RFbSu1c7gSBJCCm4@clicker.jnlxn1y.mongodb.net/?retryWrites=true&w=majority'

async function listDatabases(client: MongoClient){
  const db = client.db('Grimace')
  const coll = db.collection('Users')
  const items = coll.find()
  // console.log(items)
  return items
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  await dbConnect()
  await clientPromise
  switch (method) {
    case 'GET':
      var opts = {
        dbName: 'Grimace'
      }
      try {
        
    const clt = new MongoClient(MONGODBURI)
    const leaderboard = clt.db("Grimace").collection("Users")
    
    const topUsers = await leaderboard.find().sort({ score: -1 }).limit(3).toArray();
    console.log('Top 10 users:', topUsers);
    clt.close()

        res.status(200).json({ success: true, data: topUsers  })
      } catch (error) {
        res.status(400).json({ success: false })
      }

      // try {
      //   const clt = new MongoClient(MONGODBURI)

      //   res.status(201).json({ success: true, data: topUsers })
      // } catch (error) {
      //   res.status(400).json({ success: false })
      // }
      break
    case 'POST':
      
      break
      case 'PATCH':
      try {
        const clt = new MongoClient(MONGODBURI)
        const huntCollection = clt.db("Grimace").collection("Users")
        const crd = await huntCollection.updateOne({username:req.body.username},{$set:{score:req.body.score}})


        // const card = await Card.create(
        //   req.body
        // ) 
      clt.close()

        res.status(201).json({ success: true, data: crd })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
