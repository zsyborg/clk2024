import { NextApiRequest, NextApiResponse } from 'next'
// import Card, {Cards} from '../../../models/Card'
const MONGODBURI = process.env['MONGODBURI']!
import dbConnect from '../../../lib/dbConnect'
import clientPromise from '../../../lib/mongodb'
import { MongoClient } from 'mongodb'
import NextCors from 'nextjs-cors'
// import { createClient } from '@vercel/kv';
import { MongoClientOptions } from 'mongodb';

// import { createClient } from '@supabase/supabase-js';
// import { Database } from 'database-types';
// Create a single supabase client for interacting with your database
// const supabase = createClient<Database>('https://pqpayyxkvsfoddpbdwyq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcGF5eXhrdnNmb2RkcGJkd3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjcxMDUsImV4cCI6MjAyOTk0MzEwNX0.yKp-tNgNR0UirxrqHT0TmPQBoRUaVhzf1rTef86ukRY')


// const MONGODBURI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'

async function listDatabases(client: MongoClient){
  const db = client.db('Clicker')
  const coll = db.collection('Users')
  const items = coll.find()
  // console.log(items)
  return items
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req
  await dbConnect()
  await clientPromise
  switch (method) {
    
    
    
    ////////////////////////
    /////GET All Users Details 
    ////////////////////////
    
    
    case 'GET':
      
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
      var opts = {
        dbName: 'Clicker',
        server:
        { socketOptions: 
          { 
            socketTimeoutMS: 5000, 
            connectTimeoutMS: 10000 
          }
        }
      }

      
       
      try {

        
    const clt = new MongoClient(MONGODBURI)
    
    const huntCollection = clt.db("Clicker").collection("Users")
    // const crd = await huntCollection.find({}).toArray()
    const crd = await huntCollection.find().sort({clicks: -1}).toArray()
      

        res.status(200).json({ success: true, data: crd })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

////////////////////////
// POST - Create New User
//////////////////////// 
    case 'POST':
      
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,  // some legacy browsers (IE11, various SmartTVs) choke on 204
    Credential: false,
    Headers:{
      'Access-Control-Allow-Origin': '*'
    }
 });

        const clt = new MongoClient(MONGODBURI)
    const huntCollection = clt.db("Clicker").collection("Users")
    const curruser = JSON.stringify(req.body)
    // const usr = JSON.parse(curruser)
    // const wlt = usr.wallet
    // console.log(wlt)

    // const getAllUsers = await huntCollection.findOne({ wallet: wlt }, { projection: { _id: 0 } })

     // Check if the user already exists
    //  const existingUser = await huntCollection.findOne({ wallet: wlt });
     const crd = await huntCollection.insertOne(req.body)
     res.status(200).json({ success: true, data: crd })
     clt.close()
    // if (existingUser) {
      // res.status(200).json({ success: true, data: existingUser })
      // clt.close()
    // } else {
    // }
    // Condition to check is user exists. Create if doesn't
    /*if (getAllUsers.wallet === wlt) {
      console.log("User Exists")
      res.status(201).json({ success: true, data: getAllUsers, user: "User Exists" })
    } else {
      const data = {
        wallet: req.body.wallet,
        click: 0
      }
      console.log("User Doesn't Exists")
    }
    */
      break

      ////////////////////////
      // PATCH - Update User Click score
      //////////////////////// 
          case 'PATCH':
            
        await NextCors(req, res, {
          // Options
          methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
          origin: '*',
          optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
       });
       
       const clty = new MongoClient(MONGODBURI)
       const usrCollection = clty.db("Clicker").collection("Users")
       
       const currusr = JSON.stringify(req.body)
       const usry = JSON.parse(currusr)
      //  const wlty = usry.wallet
      //  
      //  const ucl = JSON.stringify(req.body)
      //  const cl = JSON.parse(ucl)
      //  const userclicks = cl.clicks
      //  const lvl = cl.level
       
       
      //  console.log("PATCH " + wlty)
          // const patchUserClick = await usrCollection.updateOne({ wallet: wlty }, { $set: { clicks: userclicks, level: lvl } })
          // res.status(200).json({ success: true, data: patchUserClick })
          // clty.close()


      // Default if all others fail
    default:
      res.status(400).json({ success: false, data: "Default Output" })
      break
  }
}
