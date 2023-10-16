import {NextApiResponse,NextApiRequest} from 'next'

import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

// return random movie
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'GET') {
        return res.status(405).end()
    }

    try{
        // only running the function instead of extracting the returned value
        await serverAuth(req)

        // find random movie but getting movie count
        const movieCount = await prismadb.movie.count()
        const randomIndex = Math.floor(Math.random() * movieCount) 

        // pagination to 
        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        })

        return res.status(200).json(randomMovies[0])

    } catch(err) {
        console.log(err)
        return res.status(400).end()
    }

}