import { PrismaClient } from '@prisma/client'


// this creates a global variable 'prismadb' of type PrismaClient by leveraging JS's globalThis 
declare global {
    namespace globalThis {
        var prismadb: PrismaClient
    }
}