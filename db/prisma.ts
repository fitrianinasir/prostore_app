import { PrismaClient } from '@prisma/client'
import {neonConfig} from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

// Sets up websocket connections
neonConfig.webSocketConstructor = ws
const connectionString = `${process.env.DATABASE_URL}` 

// Create a new connection pool using the provided connectionString, allowing multiple concurrent connections.
// const pool = new Pool({connectionString})

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon
// const adapter = new PrismaNeon(pool)
const adapter = new PrismaNeon({ connectionString});

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings
export const prisma = new PrismaClient({adapter: adapter})
// .$extends({
//   result: {
//     product: {
//       price: {
//         compute(product : TProduct){
//           return product.price.toString()
//         }
//       },
//       rating: {
//         compute(product: TProduct){
//           return product.rating.toString()
//         }
//       }
//     }
//   }
// })