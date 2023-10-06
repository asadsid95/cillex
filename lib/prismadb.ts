import { PrismaClient } from "@prisma/client";

// This is created because NextJS hot reloading prompts code to re run. And this could lead to multiple clients of Prisma to be created and run simultaneously
const client = global.prismadb || new PrismaClient()

// if app is in production, it stores client in the global scope 
if (process.env.NODE_ENV === 'production') global.prismadb = client

export default client