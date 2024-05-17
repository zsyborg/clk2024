import mongoose from 'mongoose'
const globalAny:any = global;

declare global {
  const mongoose: any
}

const MONGODBURI = process.env['MONGODBURI']!

if (!MONGODBURI) {
  throw new Error(
    'Please define the MONGODBURI environment variable inside .env.local'
  )
}

let cached = globalAny.mongoose

if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: 'Grimace'
    }
    cached.promise = mongoose.connect(MONGODBURI, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
